import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateQRCodeDto } from './dto/create-qrcode.dto';
import { UpdateQRCodeDto } from './dto/update-qrcode.dto';
import * as fs from 'fs';
import * as path from 'path';
import { logAction } from 'src/common/audit-log.util';

@Injectable()
export class QRCodeService {
	constructor(private prisma: PrismaService) {}

	async create(createQRCodeDto: CreateQRCodeDto, image: Express.Multer.File, userId: number) {
		// Проверка наличия изображения
		if (!image) {
			throw new BadRequestException('Изображение QR-кода обязательно');
		}

		// Преобразуем mosqueId в число
		const mosqueId = Number(createQRCodeDto.mosqueId);
		
		// Проверяем существование мечети
		const mosque = await this.prisma.mosque.findFirst({
			where: { id: mosqueId }
		});
		
		if (!mosque) {
			// Удаляем загруженный файл, если мечеть не найдена
			if (image && image.path) {
				fs.unlinkSync(image.path);
			}
			throw new NotFoundException(
				`Мечеть с ID ${mosqueId} не найдена`
			);
		}

		// Проверяем права доступа: MOSQUE_ADMIN может создавать QR-коды только для своей мечети
		const admin = await this.prisma.admin.findUnique({
			where: { id: userId }
		});

		if (admin && admin.role === 'MOSQUE_ADMIN') {
			if (admin.mosqueId !== mosqueId) {
				// Удаляем загруженный файл, если нет прав
				if (image && image.path) {
					fs.unlinkSync(image.path);
				}
				throw new HttpException('У вас нет прав для создания QR-кода для этой мечети', HttpStatus.FORBIDDEN);
			}
		}
		
		// Проверка количества существующих QR-кодов для мечети
		const existingQRCodes = await this.prisma.qRCode.findMany({
			where: { 
				mosqueId: mosqueId 
			}
		});

		// Если у мечети уже есть 2 QR-кода, выдаем ошибку
		if (existingQRCodes.length >= 2) {
			// Удаляем загруженный файл
			if (image && image.path) {
				fs.unlinkSync(image.path);
			}
			throw new BadRequestException('У мечети может быть максимум 2 QR-кода');
		}

		// Определяем, будет ли новый QR-код основным
		let isPrimary = true;
		if (typeof createQRCodeDto.isPrimary === 'boolean') {
			isPrimary = createQRCodeDto.isPrimary;
		} else {
			// Если это первый QR-код, делаем его основным
			// Если это второй QR-код, делаем его второстепенным
			isPrimary = existingQRCodes.length === 0;
		}

		// Если создается новый основной QR-код, делаем все существующие второстепенными
		if (isPrimary && existingQRCodes.length > 0) {
			await this.prisma.qRCode.updateMany({
				where: { mosqueId: mosqueId },
				data: { isPrimary: false }
			});
		}

		let projectName = null;

		// Сохраняем название проекта только для дополнительного QR-кода
		if (!isPrimary && createQRCodeDto.projectName) {
			projectName = createQRCodeDto.projectName;
		}

		// Получаем путь к изображению относительно корня сервера
		const imageUrl = `/uploads/qrcodes/${path.basename(image.path)}`;

		const createdQRCode = await this.prisma.qRCode.create({
			data: {
				imageUrl,
				mosqueId: mosqueId,
				isPrimary,
				projectName
			},
		});
		await logAction(this.prisma, userId, 'create', 'QRCode', createdQRCode.id, null, createdQRCode);
		return createdQRCode;
	}

	findAll() {
		return this.prisma.qRCode.findMany({
			orderBy: [
				{ mosqueId: 'asc' },
				{ isPrimary: 'desc' }
			],
			include: {
				mosque: {
					select: {
						name: true
					}
				}
			}
		});
	}

	async findOne(id: number) {
		const qrCode = await this.prisma.qRCode.findFirst({ 
			where: { id },
			include: {
				mosque: {
					select: {
						name: true
					}
				}
			}
		});

		if (!qrCode) {
			throw new NotFoundException(`QR-код с ID ${id} не найден`);
		}

		return qrCode;
	}

	async update(id: number, updateQRCodeDto: UpdateQRCodeDto, userId: number, image?: Express.Multer.File) {
		// Проверяем существование QR-кода
		const existingQRCode = await this.prisma.qRCode.findFirst({
			where: { id }
		});

		if (!existingQRCode) {
			// Удаляем загруженный файл, если QR-код не найден
			if (image && image.path) {
				fs.unlinkSync(image.path);
			}
			throw new NotFoundException(`QR-код с ID ${id} не найден`);
		}

		// Проверяем права доступа: MOSQUE_ADMIN может редактировать только QR-коды своей мечети
		const admin = await this.prisma.admin.findUnique({
			where: { id: userId }
		});

		if (admin && admin.role === 'MOSQUE_ADMIN') {
			if (admin.mosqueId !== existingQRCode.mosqueId) {
				// Удаляем загруженный файл, если нет прав
				if (image && image.path) {
					fs.unlinkSync(image.path);
				}
				throw new HttpException('У вас нет прав для редактирования этого QR-кода', HttpStatus.FORBIDDEN);
			}
		}

		// Подготавливаем объект с данными для обновления
		const data: any = {};
		
		// Преобразуем значения полей в нужный тип данных
		if (updateQRCodeDto.mosqueId !== undefined) {
			data.mosqueId = Number(updateQRCodeDto.mosqueId);
		}
		
		if (updateQRCodeDto.isPrimary !== undefined) {
			// Преобразуем различные типы входных данных в булево значение
			const isPrimaryValue = updateQRCodeDto.isPrimary;
			if (typeof isPrimaryValue === 'boolean') {
				data.isPrimary = isPrimaryValue;
			} else if (typeof isPrimaryValue === 'string') {
				data.isPrimary = isPrimaryValue === 'true';
			} else if (typeof isPrimaryValue === 'number') {
				data.isPrimary = isPrimaryValue === 1;
			}
		}

		// Обновляем путь к изображению, если оно загружено
		if (image) {
			data.imageUrl = `/uploads/qrcodes/${path.basename(image.path)}`;
		}

		// Сохраняем название проекта только для неосновного QR-кода
		if (updateQRCodeDto.projectName !== undefined) {
			// Если QR-код становится основным, то удаляем название проекта
			if (data.isPrimary === true) {
				data.projectName = null;
			} else {
				// Проверяем текущее состояние QR-кода
				if (existingQRCode && (!existingQRCode.isPrimary || data.isPrimary === false)) {
					data.projectName = updateQRCodeDto.projectName;
				}
			}
		}
		
		// Если изменяется mosqueId, проверяем количество QR-кодов для новой мечети
		if (data.mosqueId !== undefined && data.mosqueId !== existingQRCode.mosqueId) {
			// Проверяем количество QR-кодов для новой мечети
			const existingQRCodes = await this.prisma.qRCode.findMany({
				where: { mosqueId: data.mosqueId }
			});
			
			if (existingQRCodes.length >= 2) {
				// Удаляем загруженный файл
				if (image && image.path) {
					fs.unlinkSync(image.path);
				}
				throw new BadRequestException('У мечети может быть максимум 2 QR-кода');
			}
		}
		
		// Если обновляется isPrimary
		if (data.isPrimary !== undefined) {
			// Если делаем QR-код основным
			if (data.isPrimary) {
				await this.prisma.qRCode.updateMany({
					where: {
						mosqueId: existingQRCode.mosqueId, 
						id: { not: id } 
					},
					data: { isPrimary: false }
				});
			} 
			// Если делаем QR-код второстепенным
			else {
				// Проверяем, есть ли другие QR-коды у этой мечети
				const otherQRCodes = await this.prisma.qRCode.findMany({
					where: { 
						mosqueId: existingQRCode.mosqueId, 
						id: { not: id }
					}
				});
				
				// Если других QR-кодов нет, не позволяем сделать этот второстепенным
				if (otherQRCodes.length === 0) {
					// Удаляем загруженный файл
					if (image && image.path) {
						fs.unlinkSync(image.path);
					}
					throw new BadRequestException('Нельзя сделать QR-код второстепенным, если он единственный');
				}
				
				// Если есть другие QR-коды, делаем один из них основным
				if (otherQRCodes.length > 0 && existingQRCode.isPrimary) {
					await this.prisma.qRCode.update({
						where: { id: otherQRCodes[0].id },
						data: { isPrimary: true }
					});
				}
			}
		}

		// Если был загружен новый файл и существует старый, удаляем старый
		if (image && existingQRCode.imageUrl) {
			const oldImagePath = path.join(__dirname, '..', '..', existingQRCode.imageUrl);
			if (fs.existsSync(oldImagePath)) {
				try {
					fs.unlinkSync(oldImagePath);
				} catch (error) {
					console.error('Ошибка при удалении старого изображения:', error);
				}
			}
		}
		
		const updatedQRCode = await this.prisma.qRCode.update({
			where: { id },
			data,
			include: {
				mosque: {
					select: {
						name: true
					}
				}
			}
		});
		await logAction(this.prisma, userId, 'update', 'QRCode', updatedQRCode.id, existingQRCode, updatedQRCode);
		return updatedQRCode;
	}

	async remove(id: number, userId: number) {
		const qrCode = await this.prisma.qRCode.findFirst({ where: { id } });
		
		if (!qrCode) {
			throw new NotFoundException(`QR-код с ID ${id} не найден`);
		}

		// Проверяем права доступа: MOSQUE_ADMIN может удалять только QR-коды своей мечети
		const admin = await this.prisma.admin.findUnique({
			where: { id: userId }
		});

		if (admin && admin.role === 'MOSQUE_ADMIN') {
			if (admin.mosqueId !== qrCode.mosqueId) {
				throw new HttpException('У вас нет прав для удаления этого QR-кода', HttpStatus.FORBIDDEN);
			}
		}

		// Если удаляемый QR-код был основным и есть второй QR-код, делаем второй основным
		if (qrCode.isPrimary) {
			const otherQRCode = await this.prisma.qRCode.findFirst({
				where: { 
					mosqueId: qrCode.mosqueId, 
					id: { not: id }
				}
			});
			
			if (otherQRCode) {
				await this.prisma.qRCode.update({
					where: { id: otherQRCode.id },
					data: { isPrimary: true }
				});
			}
		}

		// Удаляем файл изображения
		if (qrCode.imageUrl) {
			const imagePath = path.join(__dirname, '..', '..', qrCode.imageUrl);
			if (fs.existsSync(imagePath)) {
				try {
					fs.unlinkSync(imagePath);
				} catch (error) {
					console.error('Ошибка при удалении изображения:', error);
				}
			}
		}
		
		const deletedQRCode = await this.prisma.qRCode.delete({ 
			where: { id },
			include: {
				mosque: {
					select: {
						name: true
					}
				}
			}
		});
		await logAction(this.prisma, userId, 'delete', 'QRCode', deletedQRCode.id, qrCode, null);
		return deletedQRCode;
	}

	async findByMosque(mosqueId: number) {
		const mosque = await this.prisma.mosque.findFirst({
			where: { id: Number(mosqueId) }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		return this.prisma.qRCode.findMany({
			where: { mosqueId: Number(mosqueId) },
			orderBy: { isPrimary: 'desc' },
			include: {
				mosque: {
					select: {
						name: true
					}
				}
			}
		});
	}
}
