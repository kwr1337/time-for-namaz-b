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
	NotFoundException
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
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('prayers')
export class PrayerController {
	constructor(private readonly prayerService: PrayerService) {}

	@Post('import')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN) // Защита маршрута только для SUPER_ADMIN
	@UseInterceptors(FileInterceptor('file', {
		storage: diskStorage({
			destination: './uploads',
			filename: (req, file, callback) => {
				const filename: string = file.originalname.split('.')[0];
				const fileExtname: string = extname(file.originalname);
				callback(null, `${filename}-${Date.now()}${fileExtname}`);
			},
		}),
		fileFilter: (req, file, callback) => {
			const allowedMimeTypes = [
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Для .xlsx файлов
				'application/vnd.ms-excel' // Для старых .xls файлов (если нужно)
			];

			if (!allowedMimeTypes.includes(file.mimetype)) {
				return callback(new HttpException('Разрешены только файлы Excel!', HttpStatus.BAD_REQUEST), false);
			}

			callback(null, true);
		},
	}))
	async importFromExcel(@UploadedFile() file: Express.Multer.File) {
		try {
			if (!file) {
				throw new HttpException('Файл не загружен', HttpStatus.BAD_REQUEST);
			}

			// Импортируем данные из Excel
			const result = await this.prayerService.importFromExcel(file.path);

			return result;
		} catch (error) {
			throw new HttpException(error.message || 'Произошла ошибка при импорте данных.', HttpStatus.INTERNAL_SERVER_ERROR);
		}
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
		@Body('shiftMinutes') shiftMinutes: number
	) {
		try {
			if (!cityId || !prayerName || shiftMinutes === undefined) {
				throw new HttpException('Отсутствуют обязательные параметры', HttpStatus.BAD_REQUEST);
			}

			// Сдвигаем время намазов для города по ID
			const result = await this.prayerService.shiftPrayerTimesForCity(cityId, prayerName, shiftMinutes);

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
		@Body() updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto
	) {
		try {
			return await this.prayerService.updateFixedPrayerTime(+cityId, updateFixedPrayerTimeDto);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put('fixed-time/:cityId')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Обновить фиксированное время намаза для города' })
	@ApiResponse({ status: 200, description: 'Фиксированное время намаза обновлено успешно' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async updateFixedPrayerTime(
		@Param('cityId') cityId: string,
		@Body() updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto
	) {
		try {
			return await this.prayerService.updateFixedPrayerTime(+cityId, updateFixedPrayerTimeDto);
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new HttpException(error.message, HttpStatus.NOT_FOUND);
			}
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put('fixed-time/:cityId/toggle')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Включить/выключить все фиксированные времена намаза для города' })
	@ApiResponse({ status: 200, description: 'Статус всех фиксированных времен намаза изменен успешно' })
	@ApiResponse({ status: 404, description: 'Город не найден' })
	async toggleFixedPrayerTime(
		@Param('cityId') cityId: string,
		@Body('isActive') isActive: boolean
	) {
		try {
			// Устанавливаем все флаги активности одновременно
			const updateDto: UpdateFixedPrayerTimeDto = {
				fajrActive: isActive,
				shurukActive: isActive,
				zuhrActive: isActive,
				asrActive: isActive,
				maghribActive: isActive,
				ishaActive: isActive,
				mechetActive: isActive
			};
			return await this.prayerService.updateFixedPrayerTime(+cityId, updateDto);
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
		@Body('isActive') isActive: boolean
	) {
		try {
			// Проверка параметров запроса
			if (!prayerType || isActive === undefined) {
				throw new BadRequestException('Тип молитвы и статус активности обязательны');
			}

			// Сопоставляем тип молитвы с полем DTO
			const prayerTypeMap = {
				'fajr': 'fajrActive',
				'shuruk': 'shurukActive',
				'zuhr': 'zuhrActive',
				'asr': 'asrActive', 
				'maghrib': 'maghribActive',
				'isha': 'ishaActive',
				'mechet': 'mechetActive'
			};

			const activeField = prayerTypeMap[prayerType.toLowerCase()];
			if (!activeField) {
				throw new BadRequestException(`Неверный тип молитвы: ${prayerType}`);
			}

			// Создаем объект для обновления только одного поля
			const updateDto: any = {};
			updateDto[activeField] = isActive;

			return await this.prayerService.updateFixedPrayerTime(+cityId, updateDto);
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
	@Roles(Role.SUPER_ADMIN) // Защита маршрута только для SUPER_ADMIN
	@ApiOperation({ summary: 'Создать записи фиксированного времени намаза для всех городов' })
	@ApiResponse({ status: 200, description: 'Записи созданы успешно' })
	async createFixedTimesForAllCities() {
		try {
			return await this.prayerService.createFixedTimesForAllCities();
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
