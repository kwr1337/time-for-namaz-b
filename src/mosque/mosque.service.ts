import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateMosqueDto } from './dto/create-mosque.dto'
import { UpdateMosqueDto } from './dto/update-mosque.dto'
import { logAction } from 'src/common/audit-log.util'
import { defaultNamesOfAllah } from '../names-of-allah/data/default-names-of-allah'

@Injectable()
export class MosqueService {
	constructor(private prisma: PrismaService) {
	}

	async create(createMosqueDto: CreateMosqueDto, userId: number) {
		const { name, logoUrl, cityId } = createMosqueDto
		
		// Создаем мечеть
		const newMosque = await this.prisma.mosque.create({
			data: {
				name: name,
				logoUrl: logoUrl || null,
				cityId: Number(cityId)
			}
		})

		// Копируем все Prayer города для мечети (весь год)
		const cityPrayers = await this.prisma.prayer.findMany({
			where: { cityId: Number(cityId) }
		})

		if (cityPrayers.length > 0) {
			// Создаем Prayer записи для мечети на основе города
			await this.prisma.prayer.createMany({
				data: cityPrayers.map(prayer => ({
					cityId: prayer.cityId,
					mosqueId: newMosque.id,
					date: prayer.date,
					fajr: prayer.fajr,
					shuruk: prayer.shuruk,
					zuhr: prayer.zuhr,
					asr: prayer.asr,
					maghrib: prayer.maghrib,
					isha: prayer.isha,
					mechet: prayer.mechet
				}))
			})
		}

		// Создаем пустое FixedMosquePrayerTime для мечети
		await this.prisma.fixedMosquePrayerTime.create({
			data: {
				mosqueId: newMosque.id,
				fajr: "00:00",
				shuruk: "00:00",
				zuhr: "00:00",
				asr: "00:00",
				maghrib: "00:00",
				isha: "00:00",
				mechet: "00:00",
				fajrActive: false,
				shurukActive: false,
				zuhrActive: false,
				asrActive: false,
				maghribActive: false,
				ishaActive: false,
				mechetActive: false,
				fajrIqamaEnabled: false,
				fajrIqamaMinutes: 0,
				shurukIqamaEnabled: false,
				shurukIqamaMinutes: 0,
				zuhrIqamaEnabled: false,
				zuhrIqamaMinutes: 0,
				asrIqamaEnabled: false,
				asrIqamaMinutes: 0,
				maghribIqamaEnabled: false,
				maghribIqamaMinutes: 0,
				ishaIqamaEnabled: false,
				ishaIqamaMinutes: 0,
				mechetIqamaEnabled: false,
				mechetIqamaMinutes: 0
			}
		})

		// Инициализируем имена Аллаха для мечети (создаем все 99 имен с базовыми значениями)
		const namesToCreate = defaultNamesOfAllah.map(name => ({
			mosqueId: newMosque.id,
			arabic: name.arabic,
			transcription: name.transcription,
			meaning: name.meaning,
			transcriptionTatar: name.transcriptionTatar || null,
			meaningTatar: name.meaningTatar || null
		}))

		await this.prisma.nameOfAllah.createMany({
			data: namesToCreate
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
