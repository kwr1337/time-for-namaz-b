import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateQRCodeDto } from './dto/create-qrcode.dto';
import { UpdateQRCodeDto } from './dto/update-qrcode.dto';

@Injectable()
export class QRCodeService {
	constructor(private prisma: PrismaService) {}

	async create(createQRCodeDto: CreateQRCodeDto, image: Express.Multer.File) {
		const imageUrl = image ? `/uploads/qrcodes/${image.filename}` : null; // Сохраняем путь к файлу
		return this.prisma.qRCode.create({
			data: {
				imageUrl,
				mosqueId: Number( createQRCodeDto.mosqueId),
			},
		});
	}

	findAll() {
		return this.prisma.qRCode.findMany();
	}

	findOne(id: number) {
		return this.prisma.qRCode.findUnique({ where: { id } });
	}

	async update(id: number, updateQRCodeDto: UpdateQRCodeDto, image: Express.Multer.File) {
		const data: any = { ...updateQRCodeDto };
		if (image) {
			data.imageUrl = `/uploads/qrcodes/${image.filename}`;
		}
		return this.prisma.qRCode.update({
			where: { id },
			data,
		});
	}

	async remove(id: number) {
		return this.prisma.qRCode.delete({ where: { id } });
	}

	async findByMosque(mosqueId: number) {
		return this.prisma.qRCode.findUnique({
			where: { mosqueId },
		});
	}
}
