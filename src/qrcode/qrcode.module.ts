import { Module } from '@nestjs/common';
import { QRCodeService } from './qrcode.service';
import { QRCodeController } from './qrcode.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
	controllers: [QRCodeController],
	providers: [QRCodeService, PrismaService],
})
export class QRCodeModule {}
