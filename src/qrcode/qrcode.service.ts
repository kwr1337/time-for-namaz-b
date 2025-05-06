import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateQRCodeDto } from './dto/create-qrcode.dto';
import { UpdateQRCodeDto } from './dto/update-qrcode.dto';

@Injectable()
export class QRCodeService {
	constructor(private prisma: PrismaService) {}

	async create(createQRCodeDto: CreateQRCodeDto, image: Express.Multer.File) {
		// Проверка количества существующих QR-кодов для мечети
		const existingQRCodes = await this.prisma.qRCode.findMany({
			where: { mosqueId: Number(createQRCodeDto.mosqueId) }
		});

		// Если у мечети уже есть 2 QR-кода, выдаем ошибку
		if (existingQRCodes.length >= 2) {
			throw new HttpException(
				'У мечети может быть максимум 2 QR-кода', 
				HttpStatus.BAD_REQUEST
			);
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
				where: { mosqueId: Number(createQRCodeDto.mosqueId) },
				data: { isPrimary: false }
			});
		}

		const imageUrl = image ? `/uploads/qrcodes/${image.filename}` : null;
		return this.prisma.qRCode.create({
			data: {
				imageUrl,
				mosqueId: Number(createQRCodeDto.mosqueId),
				isPrimary
			},
		});
	}

	findAll() {
		return this.prisma.qRCode.findMany({
			orderBy: [
				{ mosqueId: 'asc' },
				{ isPrimary: 'desc' }
			]
		});
	}

	findOne(id: number) {
		return this.prisma.qRCode.findUnique({ where: { id } });
	}

	async update(id: number, updateQRCodeDto: UpdateQRCodeDto, image: Express.Multer.File) {
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
		
		if (image) {
			data.imageUrl = `/uploads/qrcodes/${image.filename}`;
		}
		
		// Если изменяется mosqueId, проверяем количество QR-кодов для новой мечети
		if (data.mosqueId !== undefined) {
			// Получаем текущий QR-код для проверки, меняется ли мечеть
			const currentQRCode = await this.prisma.qRCode.findUnique({
				where: { id }
			});
			
			// Если меняется мечеть
			if (currentQRCode && data.mosqueId !== currentQRCode.mosqueId) {
				// Проверяем количество QR-кодов для новой мечети
				const existingQRCodes = await this.prisma.qRCode.findMany({
					where: { mosqueId: data.mosqueId }
				});
				
				if (existingQRCodes.length >= 2) {
					throw new HttpException(
						'У мечети может быть максимум 2 QR-кода',
						HttpStatus.BAD_REQUEST
					);
				}
			}
		}
		
		// Если обновляется isPrimary
		if (data.isPrimary !== undefined) {
			const currentQRCode = await this.prisma.qRCode.findUnique({ where: { id } });
			if (currentQRCode) {
				// Если делаем QR-код основным
				if (data.isPrimary) {
					await this.prisma.qRCode.updateMany({
						where: { 
							mosqueId: currentQRCode.mosqueId, 
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
							mosqueId: currentQRCode.mosqueId, 
							id: { not: id }
						}
					});
					
					// Если других QR-кодов нет, не позволяем сделать этот второстепенным
					if (otherQRCodes.length === 0) {
						throw new HttpException(
							'Нельзя сделать QR-код второстепенным, если он единственный',
							HttpStatus.BAD_REQUEST
						);
					}
					
					// Если есть другие QR-коды, делаем один из них основным
					if (otherQRCodes.length > 0) {
						await this.prisma.qRCode.update({
							where: { id: otherQRCodes[0].id },
							data: { isPrimary: true }
						});
					}
				}
			}
		}
		
		return this.prisma.qRCode.update({
			where: { id },
			data
		});
	}

	async remove(id: number) {
		const qrCode = await this.prisma.qRCode.findUnique({ where: { id } });
		
		// Если удаляемый QR-код был основным и есть второй QR-код, делаем второй основным
		if (qrCode && qrCode.isPrimary) {
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
		
		return this.prisma.qRCode.delete({ where: { id } });
	}

	async findByMosque(mosqueId: number) {
		// Возвращаем отсортированный список QR-кодов: сначала основной, потом второстепенный
		return this.prisma.qRCode.findMany({
			where: { mosqueId },
			orderBy: { isPrimary: 'desc' }
		});
	}
}
