import {
	Controller,
	Post,
	UploadedFile,
	UseInterceptors,
	HttpException,
	HttpStatus,
	Body,
	Get,
	Query,
	UseGuards,
	Param,
	Put,
	Delete,
	BadRequestException,
	NotFoundException,
	Request,
	UnauthorizedException,
	Req
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrayerService } from './prayer.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client'
import Role = $Enums.Role // Путь к вашему декоратору
import { CreateFixedPrayerTimeDto } from './dto/create-fixed-prayer-time.dto';
import { UpdateFixedPrayerTimeDto } from './dto/update-fixed-prayer-time.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { UpdatePrayerDto } from './dto/update-prayer.dto';

@Controller('prayers')
export class PrayerController {
	constructor(private readonly prayerService: PrayerService) {}

	@Post('import')
	@UseInterceptors(FileInterceptor('file'))
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN)
	@ApiOperation({ summary: 'Импорт расписания намазов из Excel файла' })
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'string',
					format: 'binary',
				},
			},
		},
	})
	@ApiResponse({ status: 200, description: 'Файл успешно импортирован' })
	@ApiResponse({ status: 400, description: 'Неверный формат файла' })
	@ApiResponse({ status: 401, description: 'Не авторизован' })
	@ApiResponse({ status: 403, description: 'Нет прав доступа' })
	async importFromExcel(
		@UploadedFile() file: Express.Multer.File,
		@Request() req
	) {
		if (!file) {
			throw new BadRequestException('Файл не был загружен');
		}
		// Получаем ID админа из запроса
		const adminId = req.user.id;
		if (!adminId) {
			throw new UnauthorizedException('ID администратора не найден в запросе');
		}
		const result = await this.prayerService.importFromExcel(file.path, adminId);
		return result;
	}

	@Get('all')
	async getAllPrayers(@Query('cityId') cityId: number) {
		try {
			if (!cityId) {
				throw new HttpException('ID города обязателен', HttpStatus.BAD_REQUEST);
			}

			// Получаем все намазы для города по ID
			const result = await this.prayerService.getAllPrayersForCity(cityId);

			return result;
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Post('shift')
	@UseGuards(AuthGuard('jwt'))
	async shiftPrayerTimes(
		@Body('cityId') cityId: number,
		@Body('prayerName') prayerName: string,
		@Body('shiftMinutes') shiftMinutes: number,
		@Request() req: any
	) {
		try {
			if (!cityId || !prayerName || shiftMinutes === undefined) {
				throw new HttpException('Отсутствуют обязательные параметры', HttpStatus.BAD_REQUEST);
			}
			const userId = req.user.id;
			const result = await this.prayerService.shiftPrayerTimesForCity(cityId, prayerName, shiftMinutes, userId);
			return result;
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get('today')
	async getTodaysPrayers(@Query('cityName') cityName: string) {
		try {
			if (!cityName) {
				throw new HttpException('Название города обязательно', HttpStatus.BAD_REQUEST);
			}

			// Получаем намазы для города на сегодня
			const result = await this.prayerService.getTodaysPrayersForCity(cityName);

			return result;
		} catch (error) {
			console.error(`Ошибка при получении молитв: ${error.message}`);
			
			if (error.message && error.message.includes('не найден')) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			
			throw new HttpException(
				error.message || 'Произошла ошибка при получении молитв',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	// Контроллеры для фиксированного времени намаза

	@Get('fixed-time/city/:cityId')
	@ApiOperation({ summary: 'Получить фиксированное время намаза по ID города' })
	@ApiResponse({ status: 200, description: 'Фиксированное время намаза получено успешно' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async getFixedPrayerTimeByCityId(@Param('cityId') cityId: string) {
		try {
			return await this.prayerService.getFixedPrayerTimeByCityId(+cityId);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get('fixed-time/city-name/:cityName')
	@ApiOperation({ summary: 'Получить фиксированное время намаза по названию города' })
	@ApiResponse({ status: 200, description: 'Фиксированное время намаза получено успешно' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async getFixedPrayerTimeByCityName(@Param('cityName') cityName: string) {
		try {
			return await this.prayerService.getFixedPrayerTimeByCityName(cityName);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get('fixed-time/all')
	@ApiOperation({ summary: 'Получить все фиксированные времена намазов' })
	@ApiResponse({ status: 200, description: 'Список фиксированных времен намазов' })
	async getAllFixedPrayerTimes() {
		try {
			return await this.prayerService.getAllFixedPrayerTimes();
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put('fixed-time/city/:cityId')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Обновить фиксированное время намаза для города (альтернативный путь)' })
	@ApiResponse({ status: 200, description: 'Фиксированное время намаза обновлено успешно' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async updateFixedPrayerTimeAlt(
		@Param('cityId') cityId: string,
		@Body() updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto,
		@Req() req: any
	) {
		try {
			return await this.prayerService.updateCityFixedPrayerTime(+cityId, updateFixedPrayerTimeDto, req.user.id);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put(':id/fixed-time')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	@ApiOperation({ summary: 'Обновить фиксированное время намаза' })
	@ApiResponse({ status: 200, description: 'Время намаза успешно обновлено' })
	@ApiResponse({ status: 404, description: 'Намаз не найден' })
	async updateFixedPrayerTime(
		@Param('id') id: string,
		@Body() updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto,
		@Req() req: any,
	) {
		updateFixedPrayerTimeDto.userId = req.user.id;
		return this.prayerService.updateFixedPrayerTime(+id, updateFixedPrayerTimeDto);
	}

	@Put('fixed-time/:cityId/toggle')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Включить/выключить все фиксированные времена намаза для города' })
	@ApiResponse({ status: 200, description: 'Статус всех фиксированных времен намаза изменен успешно' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async toggleFixedPrayerTime(
		@Param('cityId') cityId: string,
		@Body('isActive') isActive: boolean,
		@Req() req: any
	) {
		try {
			// Получаем текущие значения времени
			const fixedTime = await this.prayerService.getFixedPrayerTimeByCityId(+cityId);
			
			// Обновляем каждое время намаза по отдельности
			const prayerTypes = ['fajr', 'shuruk', 'zuhr', 'asr', 'maghrib', 'isha', 'mechet'];
			for (const prayerType of prayerTypes) {
				await this.prayerService.togglePrayerTime(
					+cityId,
					prayerType,
					isActive,
					req.user.id
				);
			}

			return { message: 'Все времена намаза успешно обновлены' };
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put('fixed-time/:cityId/toggle-prayer')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Включить/выключить одно фиксированное время намаза для города' })
	@ApiResponse({ status: 200, description: 'Статус фиксированного времени намаза изменен успешно' })
	@ApiResponse({ status: 404, description: 'Город или тип молитвы не найден' })
	async togglePrayerTime(
		@Param('cityId') cityId: string,
		@Body('prayerType') prayerType: string,
		@Body('isActive') isActive: boolean,
		@Req() req: any
	) {
		try {
			// Проверка параметров запроса
			if (!prayerType || isActive === undefined) {
				throw new BadRequestException('Тип молитвы и статус активности обязательны');
			}

			return await this.prayerService.togglePrayerTime(
				+cityId,
				prayerType,
				isActive,
				req.user.id
			);
		} catch (error) {
			if (error instanceof BadRequestException) {
				throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
			}
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Новый эндпоинт для создания записей FixedPrayerTime для всех городов
	@Post('create-fixed-times-for-all-cities')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles($Enums.Role.SUPER_ADMIN) // Защита маршрута только для SUPER_ADMIN
	@ApiOperation({ summary: 'Создать записи фиксированного времени намаза для всех городов' })
	@ApiResponse({ status: 200, description: 'Записи созданы успешно' })
	async createFixedTimesForAllCities() {
		try {
			return await this.prayerService.createFixedTimesForAllCities();
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put(':id/time')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles($Enums.Role.SUPER_ADMIN, $Enums.Role.CITY_ADMIN)
	@ApiOperation({ summary: 'Изменить время намаза' })
	@ApiResponse({ status: 200, description: 'Время намаза успешно изменено' })
	@ApiResponse({ status: 404, description: 'Намаз не найден' })
	async updatePrayerTime(
		@Param('id') id: string,
		@Body() updatePrayerDto: UpdatePrayerDto,
		@Request() req: any,
	) {
		const userId = req.user.id;
		return this.prayerService.updatePrayerTime(
			+id,
			updatePrayerDto.prayerType,
			updatePrayerDto.time,
			userId,
		);
	}

	@Get('city/:cityId/changes')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles($Enums.Role.SUPER_ADMIN, $Enums.Role.CITY_ADMIN)
	@ApiOperation({ summary: 'Получить историю изменений времени намазов для города' })
	@ApiResponse({ status: 200, description: 'История изменений успешно получена' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async getCityPrayerTimeChanges(@Param('cityId') cityId: string) {
		return this.prayerService.getCityPrayerTimeChanges(+cityId);
	}

	@Get(':id/changes')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles($Enums.Role.SUPER_ADMIN, $Enums.Role.CITY_ADMIN)
	@ApiOperation({ summary: 'Получить историю изменений времени конкретного намаза' })
	@ApiResponse({ status: 200, description: 'История изменений успешно получена' })
	@ApiResponse({ status: 404, description: 'Намаз не найден' })
	async getPrayerTimeChanges(@Param('id') id: string) {
		return this.prayerService.getPrayerTimeChanges(+id);
	}
}
