import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  NotFoundException,
  ConflictException
} from '@nestjs/common';
import { TranslationService } from './translation.service';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('translations')
@Controller('translations')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Создать новый перевод' })
  @ApiResponse({ status: 201, description: 'Перевод успешно создан' })
  @ApiResponse({ status: 409, description: 'Перевод с таким ключом уже существует' })
  async create(@Body() createTranslationDto: CreateTranslationDto) {
    try {
      return await this.translationService.create(createTranslationDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Получить все переводы' })
  @ApiResponse({ status: 200, description: 'Список всех переводов' })
  async findAll() {
    return this.translationService.findAll();
  }

  @Get('entries')
  @ApiOperation({ summary: 'Получить все переводы в формате entries (для фронтенда)' })
  @ApiResponse({ status: 200, description: 'Переводы в формате entries' })
  async getAllAsEntries() {
    return this.translationService.getAllAsEntries();
  }

  @Get('entries/mosque/:mosqueId')
  @ApiOperation({ summary: 'Получить переводы для конкретной мечети (с учетом настройки translationsEnabled)' })
  @ApiResponse({ status: 200, description: 'Переводы для мечети' })
  async getEntriesForMosque(@Param('mosqueId') mosqueId: string) {
    try {
      return await this.translationService.getEntriesForMosque(+mosqueId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':key')
  @ApiOperation({ summary: 'Получить перевод по ключу' })
  @ApiResponse({ status: 200, description: 'Перевод найден' })
  @ApiResponse({ status: 404, description: 'Перевод не найден' })
  async findByKey(@Param('key') key: string) {
    try {
      return await this.translationService.findByKey(key);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':key')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Обновить перевод' })
  @ApiResponse({ status: 200, description: 'Перевод успешно обновлен' })
  @ApiResponse({ status: 404, description: 'Перевод не найден' })
  async update(@Param('key') key: string, @Body() updateTranslationDto: UpdateTranslationDto) {
    try {
      return await this.translationService.update(key, updateTranslationDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':key')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Удалить перевод' })
  @ApiResponse({ status: 200, description: 'Перевод успешно удален' })
  @ApiResponse({ status: 404, description: 'Перевод не найден' })
  async remove(@Param('key') key: string) {
    try {
      return await this.translationService.remove(key);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

