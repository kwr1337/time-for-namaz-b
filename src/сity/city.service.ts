import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
	constructor(private prisma: PrismaService) {}

	create(createCityDto: CreateCityDto) {
		return this.prisma.city.create({ data: createCityDto });
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
