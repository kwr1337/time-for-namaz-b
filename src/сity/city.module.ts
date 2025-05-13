import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { PrismaService } from 'src/prisma.service'
import { PrayerModule } from 'src/prayer/prayer.module';

@Module({
	imports: [PrayerModule],
	controllers: [CityController],
	providers: [CityService, PrismaService],
})
export class CityModule {}