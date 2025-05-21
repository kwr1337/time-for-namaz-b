import { Module } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { AuditLogController } from './audit-log.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuditLogController],
  providers: [AuditLogService, PrismaService],
  exports: [AuditLogService] // Экспортируем сервис, если он может понадобиться в других модулях
})
export class AuditLogModule {} 