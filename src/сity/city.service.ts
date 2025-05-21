import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrayerService } from 'src/prayer/prayer.service';
import { logAction } from 'src/common/audit-log.util';

@Injectable()
export class CityService {
	constructor(
		private prisma: PrismaService,
		private prayerService: PrayerService
	) {}

	async create(createCityDto: CreateCityDto, userId: number) {
		// Создаем город
		const newCity = await this.prisma.city.create({ data: createCityDto });
		
		// Создаем фиксированное время для города
		try {
			await this.prayerService.createDefaultFixedPrayerTime(newCity.id);
		} catch (error) {
			console.error(`Ошибка при создании фиксированного времени для города ${newCity.id}: ${error.message}`);
			// Не выбрасываем ошибку, чтобы не прерывать основной процесс
		}
		
		await logAction(this.prisma, userId, 'create', 'City', newCity.id, null, newCity);
		return newCity;
	}

	findAll() {
		return this.prisma.city.findMany();
	}

	findOne(id: number) {
		return this.prisma.city.findUnique({
			where: {
				id: Number(id)
			}
		});
	}

	async updateLogo(id: number, logoUrl: string, userId: number) {
		const oldCity = await this.prisma.city.findUnique({ where: { id: Number(id) } });
		const updatedCity = await this.prisma.city.update({ where: { id: Number(id) }, data: { logoUrl } });
		await logAction(this.prisma, userId, 'update', 'City', updatedCity.id, oldCity, updatedCity);
		return updatedCity;
	}

	async update(id: number, updateCityDto: UpdateCityDto, userId: number) {
		const oldCity = await this.prisma.city.findUnique({ where: { id: Number(id) } });
		const updatedCity = await this.prisma.city.update({ where: { id: Number(id) }, data: updateCityDto });
		await logAction(this.prisma, userId, 'update', 'City', updatedCity.id, oldCity, updatedCity);
		return updatedCity;
	}

	async remove(id: number, userId: number) {
		const oldCity = await this.prisma.city.findUnique({ where: { id: Number(id) } });
		const deletedCity = await this.prisma.city.delete({ where: { id: Number(id) } });
		await logAction(this.prisma, userId, 'delete', 'City', deletedCity.id, oldCity, null);
		return deletedCity;
	}
}
