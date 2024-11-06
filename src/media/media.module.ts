import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
	controllers: [MediaController],
	providers: [MediaService, PrismaService],
})
export class MediaModule {}
