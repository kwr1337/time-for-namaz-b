import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateMosqueDto } from './dto/create-mosque.dto'
import { UpdateMosqueDto } from './dto/update-mosque.dto'

@Injectable()
export class MosqueService {
	constructor(private prisma: PrismaService) {
	}

	async create(createMosqueDto: CreateMosqueDto) {
		const { name, logoUrl, cityId } = createMosqueDto
		return this.prisma.mosque.create({
			data: {
				name: name,
				logoUrl: logoUrl || null,
				cityId: Number(cityId)
			}
		})
	}


	findAll() {
		return this.prisma.mosque.findMany()
	}

	async findOne(id: number) {
		return this.prisma.mosque.findUnique({
			where: {
				id: Number(id)
			}
		})
	}

	update(id: number, updateMosqueDto: UpdateMosqueDto) {
		return this.prisma.mosque.update({
			where: {
				id: Number(id)
			},
			data: {
				name: updateMosqueDto.name,
				logoUrl: updateMosqueDto.logoUrl || null,
				cityId: Number(updateMosqueDto.cityId)
			}
		})
	}

	remove(id: number) {
		return this.prisma.mosque.delete({
			where: {
				id: Number(id)
			},
		})
	}

	async updateLogo(id: number, logoUrl: string) {
		return this.prisma.mosque.update({
			where: {
				id: Number(id)
			},
			data: {
				logoUrl
			}
		})
	}
}
