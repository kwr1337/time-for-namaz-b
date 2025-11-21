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
  BadRequestException,
  Req
} from '@nestjs/common';
import { NamesOfAllahService } from './names-of-allah.service';
import { CreateNameOfAllahDto } from './dto/create-name-of-allah.dto';
import { UpdateNameOfAllahDto } from './dto/update-name-of-allah.dto';
import { BulkCreateNamesDto } from './dto/bulk-create-names.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('names-of-allah')
@Controller('names-of-allah')
export class NamesOfAllahController {
  constructor(private readonly namesOfAllahService: NamesOfAllahService) {}

  @Get('mosque/:mosqueId')
  @ApiOperation({ summary: 'Получить все имена Аллаха для мечети' })
  @ApiResponse({ status: 200, description: 'Список имен Аллаха' })
  @ApiResponse({ status: 404, description: 'Мечеть не найдена' })
  async findAllByMosqueId(@Param('mosqueId') mosqueId: string) {
    try {
      return await this.namesOfAllahService.findAllByMosqueId(+mosqueId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить имя Аллаха по ID' })
  @ApiResponse({ status: 200, description: 'Имя Аллаха найдено' })
  @ApiResponse({ status: 404, description: 'Имя Аллаха не найдено' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.namesOfAllahService.findOne(+id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('mosque/:mosqueId')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Создать новое имя Аллаха для мечети' })
  @ApiResponse({ status: 201, description: 'Имя Аллаха успешно создано' })
  @ApiResponse({ status: 400, description: 'Имя с таким арабским написанием уже существует' })
  @ApiResponse({ status: 404, description: 'Мечеть не найдена' })
  async create(
    @Param('mosqueId') mosqueId: string,
    @Body() createDto: CreateNameOfAllahDto,
    @Req() req: any
  ) {
    try {
      return await this.namesOfAllahService.create(+mosqueId, createDto, req.user?.id);
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

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Обновить имя Аллаха' })
  @ApiResponse({ status: 200, description: 'Имя Аллаха успешно обновлено' })
  @ApiResponse({ status: 404, description: 'Имя Аллаха не найдено' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateNameOfAllahDto,
    @Req() req: any
  ) {
    try {
      return await this.namesOfAllahService.update(+id, updateDto, req.user?.id);
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

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Удалить имя Аллаха' })
  @ApiResponse({ status: 200, description: 'Имя Аллаха успешно удалено' })
  @ApiResponse({ status: 404, description: 'Имя Аллаха не найдено' })
  async remove(@Param('id') id: string, @Req() req: any) {
    try {
      return await this.namesOfAllahService.remove(+id, req.user?.id);
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

  @Post('mosque/:mosqueId/initialize')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Инициализировать имена Аллаха для мечети (создать все 99 имен с базовыми значениями)' })
  @ApiResponse({ status: 200, description: 'Имена Аллаха успешно инициализированы' })
  @ApiResponse({ status: 400, description: 'Имена уже инициализированы' })
  @ApiResponse({ status: 404, description: 'Мечеть не найдена' })
  async initialize(@Param('mosqueId') mosqueId: string, @Req() req: any) {
    try {
      return await this.namesOfAllahService.initializeForMosque(+mosqueId, req.user?.id);
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

  @Post('mosque/:mosqueId/bulk-upsert')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Массовое создание/обновление имен Аллаха для мечети' })
  @ApiResponse({ status: 200, description: 'Имена Аллаха успешно обработаны' })
  @ApiResponse({ status: 404, description: 'Мечеть не найдена' })
  async bulkUpsert(
    @Param('mosqueId') mosqueId: string,
    @Body() bulkDto: BulkCreateNamesDto,
    @Req() req: any
  ) {
    try {
      return await this.namesOfAllahService.bulkUpsert(+mosqueId, bulkDto, req.user?.id);
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

  @Post('initialize-all')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Инициализировать имена Аллаха для всех существующих мечетей (только SUPER_ADMIN)' })
  @ApiResponse({ status: 200, description: 'Имена Аллаха успешно инициализированы для всех мечетей' })
  async initializeAll(@Req() req: any) {
    try {
      return await this.namesOfAllahService.initializeForAllMosques(req.user?.id);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

