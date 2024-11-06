import { Module } from '@nestjs/common';
import { MosqueService } from './mosque.service';
import { MosqueController } from './mosque.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
	controllers: [MosqueController],
	providers: [MosqueService, PrismaService],
})
export class MosqueModule {}
