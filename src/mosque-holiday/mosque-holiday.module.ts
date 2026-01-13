import { Module } from '@nestjs/common';
import { MosqueHolidayService } from './mosque-holiday.service';
import { MosqueHolidayController } from './mosque-holiday.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
	controllers: [MosqueHolidayController],
	providers: [MosqueHolidayService, PrismaService],
	exports: [MosqueHolidayService]
})
export class MosqueHolidayModule {}

