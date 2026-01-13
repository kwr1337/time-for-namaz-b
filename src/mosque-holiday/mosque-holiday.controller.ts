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
import { MosqueHolidayService } from './mosque-holiday.service';
import { CreateMosqueHolidayDto } from './dto/create-mosque-holiday.dto';
import { UpdateMosqueHolidayDto } from './dto/update-mosque-holiday.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('mosque-holidays')
@Controller('mosques/:mosqueId/holidays')
export class MosqueHolidayController {
	constructor(private readonly mosqueHolidayService: MosqueHolidayService) {}

	@Get()
	@ApiOperation({ summary: 'Получить все праздники мечети' })
	@ApiResponse({ status: 200, description: 'Список праздников мечети' })
	@ApiResponse({ status: 404, description: 'Мечеть не найдена' })
	async findAllByMosqueId(@Param('mosqueId') mosqueId: string) {
		try {
			return await this.mosqueHolidayService.findAllByMosqueId(+mosqueId);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get(':id')
	@ApiOperation({ summary: 'Получить праздник по ID' })
	@ApiResponse({ status: 200, description: 'Праздник найден' })
	@ApiResponse({ status: 404, description: 'Праздник не найден' })
	async findOne(@Param('id') id: string) {
		try {
			return await this.mosqueHolidayService.findOne(+id);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Post()
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN, Role.MOSQUE_ADMIN)
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Создать новый праздник для мечети' })
	@ApiResponse({ status: 201, description: 'Праздник успешно создан' })
	@ApiResponse({ status: 400, description: 'Ошибка валидации данных' })
	@ApiResponse({ status: 404, description: 'Мечеть не найдена' })
	async create(
		@Param('mosqueId') mosqueId: string,
		@Body() createDto: CreateMosqueHolidayDto,
		@Req() req: any
	) {
		try {
			return await this.mosqueHolidayService.create(+mosqueId, createDto, req.user?.id);
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
	@ApiOperation({ summary: 'Обновить праздник' })
	@ApiResponse({ status: 200, description: 'Праздник успешно обновлен' })
	@ApiResponse({ status: 400, description: 'Ошибка валидации данных' })
	@ApiResponse({ status: 404, description: 'Праздник не найден' })
	async update(
		@Param('id') id: string,
		@Body() updateDto: UpdateMosqueHolidayDto,
		@Req() req: any
	) {
		try {
			return await this.mosqueHolidayService.update(+id, updateDto, req.user?.id);
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
	@ApiOperation({ summary: 'Удалить праздник' })
	@ApiResponse({ status: 200, description: 'Праздник успешно удален' })
	@ApiResponse({ status: 404, description: 'Праздник не найден' })
	async remove(@Param('id') id: string, @Req() req: any) {
		try {
			return await this.mosqueHolidayService.remove(+id, req.user?.id);
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

