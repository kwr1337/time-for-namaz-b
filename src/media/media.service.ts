import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaService {
	constructor(private prisma: PrismaService) {}

	// Создание медиа для конкретной мечети
	create(createMediaDto: CreateMediaDto) {
		return this.prisma.media.create({
			data: {
				videoUrl: createMediaDto.videoUrl,
				mosque: { connect: { id: createMediaDto.mosqueId } }, // Привязка к мечети через connect
			},
		});
	}

	// Получение всех медиа
	findAll() {
		return this.prisma.media.findMany({
			include: { mosque: true }, // Включаем информацию о мечети
		});
	}

	// Получение медиа по ID
	findOne(id: number) {
		return this.prisma.media.findUnique({
			where: { id },
			include: { mosque: true }, // Включаем информацию о мечети
		});
	}

	// Обновление медиа
	update(id: number, updateMediaDto: UpdateMediaDto) {
		return this.prisma.media.update({
			where: { id },
			data: updateMediaDto,
		});
	}

	// Удаление медиа
	remove(id: number) {
		return this.prisma.media.delete({
			where: { id },
		});
	}
}
