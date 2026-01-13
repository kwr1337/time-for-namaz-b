import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMosqueHolidayDto } from './dto/create-mosque-holiday.dto';
import { UpdateMosqueHolidayDto } from './dto/update-mosque-holiday.dto';
import { logAction } from 'src/common/audit-log.util';

@Injectable()
export class MosqueHolidayService {
	constructor(private prisma: PrismaService) {}

	/**
	 * Валидация формата даты MM-DD и проверка корректности
	 */
	private validateDate(dateStr: string): void {
		const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
		if (!dateRegex.test(dateStr)) {
			throw new BadRequestException(`Неверный формат даты: ${dateStr}. Ожидается формат MM-DD (например: 03-01)`);
		}

		const [month, day] = dateStr.split('-').map(Number);
		
		// Проверка корректности даты
		const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if (day > daysInMonth[month - 1]) {
			throw new BadRequestException(`Неверная дата: ${dateStr}. В месяце ${month} не может быть ${day} дня`);
		}
	}

	/**
	 * Сравнение дат в формате MM-DD
	 * Возвращает: -1 если date1 < date2, 0 если равны, 1 если date1 > date2
	 */
	private compareDates(date1: string, date2: string): number {
		const [month1, day1] = date1.split('-').map(Number);
		const [month2, day2] = date2.split('-').map(Number);
		
		if (month1 < month2) return -1;
		if (month1 > month2) return 1;
		if (day1 < day2) return -1;
		if (day1 > day2) return 1;
		return 0;
	}

	/**
	 * Проверка прав доступа для работы с праздниками мечети
	 */
	private async checkAccessRights(mosqueId: number, userId?: number): Promise<void> {
		if (!userId) {
			return; // Публичный доступ для чтения
		}

		const admin = await this.prisma.admin.findUnique({
			where: { id: userId },
			include: { mosque: true, city: true }
		});

		if (!admin) {
			return; // Если админ не найден, пропускаем проверку (может быть публичный запрос)
		}

		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		// SUPER_ADMIN может управлять всеми мечетями
		if (admin.role === 'SUPER_ADMIN') {
			return;
		}

		// MOSQUE_ADMIN может управлять только своей мечетью
		if (admin.role === 'MOSQUE_ADMIN') {
			if (admin.mosqueId !== Number(mosqueId)) {
				throw new BadRequestException('У вас нет прав для управления праздниками этой мечети');
			}
			return;
		}

		// CITY_ADMIN может управлять мечетями своего города
		if (admin.role === 'CITY_ADMIN') {
			if (admin.cityId !== mosque.cityId) {
				throw new BadRequestException('У вас нет прав для управления праздниками мечетей этого города');
			}
			return;
		}
	}

	/**
	 * Получить все праздники мечети
	 */
	async findAllByMosqueId(mosqueId: number) {
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		return this.prisma.mosqueHoliday.findMany({
			where: { mosqueId: Number(mosqueId) },
			orderBy: [
				{ startDate: 'asc' },
				{ id: 'asc' }
			]
		});
	}

	/**
	 * Получить один праздник по ID
	 */
	async findOne(id: number) {
		const holiday = await this.prisma.mosqueHoliday.findUnique({
			where: { id: Number(id) },
			include: { mosque: true }
		});

		if (!holiday) {
			throw new NotFoundException(`Праздник с ID ${id} не найден`);
		}

		return holiday;
	}

	/**
	 * Создать новый праздник для мечети
	 */
	async create(mosqueId: number, createDto: CreateMosqueHolidayDto, userId?: number) {
		// Проверяем существование мечети
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		// Проверяем права доступа
		await this.checkAccessRights(mosqueId, userId);

		// Валидация дат
		this.validateDate(createDto.startDate);
		if (createDto.endDate) {
			this.validateDate(createDto.endDate);
			// Проверяем, что endDate >= startDate
			if (this.compareDates(createDto.endDate, createDto.startDate) < 0) {
				throw new BadRequestException('Дата окончания не может быть раньше даты начала');
			}
		}

		const holiday = await this.prisma.mosqueHoliday.create({
			data: {
				mosqueId: Number(mosqueId),
				nameRu: createDto.nameRu,
				nameTatar: createDto.nameTatar,
				startDate: createDto.startDate,
				endDate: createDto.endDate || null,
				isEnabled: createDto.isEnabled !== undefined ? createDto.isEnabled : true
			}
		});

		// Логируем действие
		if (userId) {
			try {
				await logAction(this.prisma, userId, 'create', 'MosqueHoliday', holiday.id, null, holiday);
			} catch (error) {
				console.error('Ошибка при создании записи аудита:', error);
			}
		}

		return holiday;
	}

	/**
	 * Обновить праздник
	 */
	async update(id: number, updateDto: UpdateMosqueHolidayDto, userId?: number) {
		const oldHoliday = await this.prisma.mosqueHoliday.findUnique({
			where: { id: Number(id) },
			include: { mosque: true }
		});

		if (!oldHoliday) {
			throw new NotFoundException(`Праздник с ID ${id} не найден`);
		}

		// Проверяем права доступа
		await this.checkAccessRights(oldHoliday.mosqueId, userId);

		// Валидация дат, если они переданы
		let startDate = oldHoliday.startDate;
		let endDate = oldHoliday.endDate;

		if (updateDto.startDate) {
			this.validateDate(updateDto.startDate);
			startDate = updateDto.startDate;
		}

		if (updateDto.endDate !== undefined) {
			if (updateDto.endDate) {
				this.validateDate(updateDto.endDate);
				endDate = updateDto.endDate;
			} else {
				endDate = null;
			}
		}

		// Проверяем, что endDate >= startDate (если endDate указан)
		if (endDate && this.compareDates(endDate, startDate) < 0) {
			throw new BadRequestException('Дата окончания не может быть раньше даты начала');
		}

		const updatedHoliday = await this.prisma.mosqueHoliday.update({
			where: { id: Number(id) },
			data: {
				nameRu: updateDto.nameRu,
				nameTatar: updateDto.nameTatar,
				startDate: updateDto.startDate,
				endDate: updateDto.endDate !== undefined ? (updateDto.endDate || null) : undefined,
				isEnabled: updateDto.isEnabled
			}
		});

		// Логируем действие
		if (userId) {
			try {
				await logAction(this.prisma, userId, 'update', 'MosqueHoliday', updatedHoliday.id, oldHoliday, updatedHoliday);
			} catch (error) {
				console.error('Ошибка при создании записи аудита:', error);
			}
		}

		return updatedHoliday;
	}

	/**
	 * Удалить праздник
	 */
	async remove(id: number, userId?: number) {
		const holiday = await this.prisma.mosqueHoliday.findUnique({
			where: { id: Number(id) },
			include: { mosque: true }
		});

		if (!holiday) {
			throw new NotFoundException(`Праздник с ID ${id} не найден`);
		}

		// Проверяем права доступа
		await this.checkAccessRights(holiday.mosqueId, userId);

		const deletedHoliday = await this.prisma.mosqueHoliday.delete({
			where: { id: Number(id) }
		});

		// Логируем действие
		if (userId) {
			try {
				await logAction(this.prisma, userId, 'delete', 'MosqueHoliday', deletedHoliday.id, holiday, null);
			} catch (error) {
				console.error('Ошибка при создании записи аудита:', error);
			}
		}

		return deletedHoliday;
	}
}

