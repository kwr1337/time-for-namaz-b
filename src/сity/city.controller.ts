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
	UseInterceptors,
	Request,
	ParseIntPipe
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
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';

@Controller('cities')
export class CityController {
	constructor(private readonly cityService: CityService) {}

	@Post()
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN)
	@ApiOperation({ summary: 'Создание города' })
	@ApiResponse({ status: 201, description: 'Город успешно создан.' })
	async create(@Body() createCityDto: CreateCityDto, @Request() req: any) {
		try {
			return await this.cityService.create(createCityDto, req.user.id);
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
			destination: './uploads/logos',
			filename: (req, file, cb) => {
				const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
				return cb(null, `${randomName}${extname(file.originalname)}`);
			},
		}),
	}))
	@ApiOperation({ summary: 'Загрузка логотипа для города' })
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
	async updateLogo(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Request() req: any) {
		const logoUrl = `/uploads/logos/${file.filename}`;
		return this.cityService.updateLogo(+id, logoUrl, req.user.id);
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN)
	@ApiOperation({ summary: 'Удаление города по ID' })
	@ApiResponse({ status: 200, description: 'Город успешно удален.' })
	@ApiResponse({ status: 404, description: 'Город не найден.' })
	async remove(@Param('id', ParseIntPipe) id: number, @Request() req: any) {
		try {
			const city = await this.cityService.findOne(id);
			if (!city) {
				throw new HttpException('Город не найден', HttpStatus.NOT_FOUND);
			}
			return await this.cityService.remove(id, req.user.id);
		} catch (error) {
			throw new HttpException('Ошибка удаления города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put(':id')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN)
	@ApiOperation({ summary: 'Обновление города по ID' })
	@ApiResponse({ status: 200, description: 'Город успешно обновлен.' })
	@ApiResponse({ status: 404, description: 'Город не найден.' })
	async update(@Param('id', ParseIntPipe) id: number, @Body() updateCityDto: UpdateCityDto, @Request() req: any) {
		try {
			const city = await this.cityService.findOne(id);
			if (!city) {
				throw new HttpException('Город не найден', HttpStatus.NOT_FOUND);
			}
			return await this.cityService.update(id, updateCityDto, req.user.id);
		} catch (error) {
			throw new HttpException('Ошибка обновления города', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
