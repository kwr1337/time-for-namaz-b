import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;
import { AuditLogService } from './audit-log.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Audit Logs')
@Controller('audit-logs')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles(Role.SUPER_ADMIN)
@ApiBearerAuth()
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все логи аудита (только для SUPER_ADMIN)' })
  @ApiResponse({ status: 200, description: 'Список логов аудита.' })
  @ApiResponse({ status: 401, description: 'Не авторизован.' })
  @ApiResponse({ status: 403, description: 'Недостаточно прав.' })
  async findAll() {
    return this.auditLogService.findAll();
  }
} 