import { Module } from '@nestjs/common';
import { ErrorMessageService } from './error-message.service';
import { ErrorMessageController } from './error-message.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
	controllers: [ErrorMessageController],
	providers: [ErrorMessageService, PrismaService],
})
export class ErrorMessageModule {}