import {
  Controller,
  Get,
  Put,
  Param,
  Body,
  UseGuards,
  HttpException,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  Req
} from '@nestjs/common';
import { MosqueLanguageSettingsService } from './mosque-language-settings.service';
import { UpdateMosqueLanguageSettingsDto } from './dto/update-mosque-language-settings.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('mosque-language-settings')
@Controller('mosque-language-settings')
export class MosqueLanguageSettingsController {
  constructor(private readonly mosqueLanguageSettingsService: MosqueLanguageSettingsService) {}

  @Get('mosque/:mosqueId')
  @ApiOperation({ summary: 'Получить настройки переключения языков для мечети' })
  @ApiResponse({ status: 200, description: 'Настройки успешно получены' })
  @ApiResponse({ status: 404, description: 'Мечеть не найдена' })
  async getByMosqueId(@Param('mosqueId') mosqueId: string) {
    try {
      return await this.mosqueLanguageSettingsService.getByMosqueId(+mosqueId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('mosque/:mosqueId')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Обновить настройки переключения языков для мечети' })
  @ApiResponse({ status: 200, description: 'Настройки успешно обновлены' })
  @ApiResponse({ status: 404, description: 'Мечеть не найдена' })
  @ApiResponse({ status: 400, description: 'Нет прав доступа' })
  async update(
    @Param('mosqueId') mosqueId: string,
    @Body() updateDto: UpdateMosqueLanguageSettingsDto,
    @Req() req: any
  ) {
    try {
      return await this.mosqueLanguageSettingsService.update(+mosqueId, updateDto, req.user?.id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

