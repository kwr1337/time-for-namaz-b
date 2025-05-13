import { Module } from '@nestjs/common';
import { PrayerController } from './prayer.controller';
import { PrayerService } from './prayer.service';
import { PrismaService } from 'src/prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
	imports: [MulterModule.register({ dest: './uploads' })],
	controllers: [PrayerController],
	providers: [PrayerService, PrismaService],
	exports: [PrayerService],
})
export class PrayerModule {}
