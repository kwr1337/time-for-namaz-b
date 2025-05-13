import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
import { PrayerService } from 'src/prayer/prayer.service';

@Injectable()
export class CityService {
	constructor(
		private prisma: PrismaService,
		private prayerService: PrayerService
	) {}

	async create(createCityDto: CreateCityDto) {
		// Создаем город
		const newCity = await this.prisma.city.create({ data: createCityDto });
		
		// Создаем фиксированное время для города
		try {
			await this.prayerService.createDefaultFixedPrayerTime(newCity.id);
		} catch (error) {
			console.error(`Ошибка при создании фиксированного времени для города ${newCity.id}: ${error.message}`);
			// Не выбрасываем ошибку, чтобы не прерывать основной процесс
		}
		
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

	updateLogo(id: number, logoUrl: string) {
		return this.prisma.city.update({
			where: {
				id: Number(id)
			},
			data: { logoUrl },
		});
	}

	remove(id: number) {
		return this.prisma.city.delete({
			where: {
				id: Number(id)
			}
		});
	}
}
