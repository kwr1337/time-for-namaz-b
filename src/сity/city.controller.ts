import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	Body,
	UseGuards,
	HttpException,
	HttpStatus,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;
import { Roles } from '../guards/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('cities')
export class CityController {
	constructor(private readonly cityService: CityService) {}

	@Post()
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	async create(@Body() createCityDto: CreateCityDto) {
		try {
			return await this.cityService.create(createCityDto);
		} catch (error) {
			throw new HttpException('Ошибка создания города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get()
	async findAll() {
		try {
			return await this.cityService.findAll();
		} catch (error) {
			throw new HttpException('Ошибка получения городов', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get(':id')
	async findOne(@Param('id') id: number) {
		try {
			const city = await this.cityService.findOne(id);
			if (!city) {
				throw new HttpException('Город не найден', HttpStatus.NOT_FOUND);
			}
			return city;
		} catch (error) {
			throw new HttpException('Ошибка получения города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Post(':id/logo')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	@UseInterceptors(FileInterceptor('file', {
		storage: diskStorage({
			destination: './uploads/cities',
			filename: (req, file, callback) => {
				const fileExtname = extname(file.originalname);
				callback(null, `city-${req.params.id}-${Date.now()}${fileExtname}`);
			},
		}),
		fileFilter: (req, file, callback) => {
			const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
			if (!allowedMimeTypes.includes(file.mimetype)) {
				return callback(
					new HttpException('Допустимы только изображения!', HttpStatus.BAD_REQUEST),
					false
				);
			}
			callback(null, true);
		},
	}))
	async uploadLogo(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
		if (!file) {
			throw new HttpException('Файл не был загружен', HttpStatus.BAD_REQUEST);
		}
		const logoUrl = `/uploads/cities/${file.filename}`;
		try {
			const updatedCity = await this.cityService.updateLogo(id, logoUrl);
			return { message: 'Логотип обновлен успешно', updatedCity };
		} catch (error) {
			throw new HttpException('Ошибка обновления логотипа города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	async remove(@Param('id') id: number) {
		try {
			const city = await this.cityService.findOne(id);
			if (!city) {
				throw new HttpException('Город не найден', HttpStatus.NOT_FOUND);
			}
			return await this.cityService.remove(id);
		} catch (error) {
			throw new HttpException('Ошибка удаления города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put(':id')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	async update(@Param('id') id: number, @Body() updateCityDto: UpdateCityDto) {
		try {
			const city = await this.cityService.findOne(id);
			if (!city) {
				throw new HttpException('Город не найден', HttpStatus.NOT_FOUND);
			}
			return await this.cityService.update(id, updateCityDto);
		} catch (error) {
			throw new HttpException('Ошибка обновления города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
