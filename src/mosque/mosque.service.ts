import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateMosqueDto } from './dto/create-mosque.dto'
import { UpdateMosqueDto } from './dto/update-mosque.dto'
import { logAction } from 'src/common/audit-log.util'

@Injectable()
export class MosqueService {
	constructor(private prisma: PrismaService) {
	}

	async create(createMosqueDto: CreateMosqueDto, userId: number) {
		const { name, logoUrl, cityId } = createMosqueDto
		const newMosque = await this.prisma.mosque.create({
			data: {
				name: name,
				logoUrl: logoUrl || null,
				cityId: Number(cityId)
			}
		})
		await logAction(this.prisma, userId, 'create', 'Mosque', newMosque.id, null, newMosque)
		return newMosque
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

	async update(id: number, updateMosqueDto: UpdateMosqueDto, userId: number) {
		const oldMosque = await this.prisma.mosque.findUnique({ where: { id: Number(id) } })
		const updatedMosque = await this.prisma.mosque.update({
			where: { id: Number(id) },
			data: {
				name: updateMosqueDto.name,
				logoUrl: updateMosqueDto.logoUrl || null,
				cityId: Number(updateMosqueDto.cityId)
			}
		})
		await logAction(this.prisma, userId, 'update', 'Mosque', updatedMosque.id, oldMosque, updatedMosque)
		return updatedMosque
	}

	async remove(id: number, userId: number) {
		const oldMosque = await this.prisma.mosque.findUnique({ where: { id: Number(id) } })
		const deletedMosque = await this.prisma.mosque.delete({ where: { id: Number(id) } })
		await logAction(this.prisma, userId, 'delete', 'Mosque', deletedMosque.id, oldMosque, null)
		return deletedMosque
	}

	async updateLogo(id: number, logoUrl: string, userId: number) {
		const oldMosque = await this.prisma.mosque.findUnique({ where: { id: Number(id) } })
		const updatedMosque = await this.prisma.mosque.update({
			where: { id: Number(id) },
			data: { logoUrl }
		})
		await logAction(this.prisma, userId, 'update', 'Mosque', updatedMosque.id, oldMosque, updatedMosque)
		return updatedMosque
	}
}
