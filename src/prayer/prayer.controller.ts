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
	UseGuards
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
 // Путь к вашему перечислению ролей

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
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
