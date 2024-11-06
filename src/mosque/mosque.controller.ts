import { Controller, Post, Get, Put, Delete, Param, Body, HttpException, HttpStatus, UseGuards, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MosqueService } from './mosque.service';
import { CreateMosqueDto } from './dto/create-mosque.dto';
import { UpdateMosqueDto } from './dto/update-mosque.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard'
import { $Enums } from '../../prisma/generated/client'
import Role = $Enums.Role
import { Roles } from '../guards/roles.decorator'
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('mosques')
export class MosqueController {
	constructor(private readonly mosqueService: MosqueService) {}

	@Post()
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	@UseInterceptors(FileInterceptor('logo', {
		storage: diskStorage({
			destination: './uploads',
			filename: (req, file, callback) => {
				const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
				const extension: string = path.parse(file.originalname).ext;
				callback(null, `${filename}${extension}`);
			},
		}),
	}))
	async create(@Body() createMosqueDto: CreateMosqueDto, @UploadedFile() file: Express.Multer.File) {
		try {
			// Если файл загружен, устанавливаем путь к логотипу
			if (file) {
				createMosqueDto.logoUrl = file.path; // Устанавливаем путь к логотипу
			} else {
				createMosqueDto.logoUrl = null; // Устанавливаем null, если логотип не передан
			}

			const mosque = await this.mosqueService.create(createMosqueDto);
			return mosque;
		} catch (error) {
			console.error(error);
			throw new HttpException('Ошибка при создании мечети', HttpStatus.BAD_REQUEST);
		}
	}


	@Get()
	async findAll() {
		try {
			const mosques = await this.mosqueService.findAll();
			return mosques;
		} catch (error) {
			throw new HttpException('Ошибка при получении списка мечетей', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get(':id')
	async findOne(@Param('id') id: number) {
		try {
			const mosque = await this.mosqueService.findOne(id);
			if (!mosque) {
				throw new HttpException('Мечеть не найдена', HttpStatus.NOT_FOUND);
			}
			return mosque;
		} catch (error) {
			throw new HttpException('Ошибка при получении мечети', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Put(':id')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN, Role.CITY_ADMIN)
	@UseInterceptors(FileInterceptor('logo', {
		storage: diskStorage({
			destination: './uploads',
			filename: (req, file, callback) => {
				const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
				const extension: string = path.parse(file.originalname).ext;
				callback(null, `${filename}${extension}`);
			},
		}),
	}))
	async update(@Param('id') id: number, @Body() updateMosqueDto: UpdateMosqueDto, @UploadedFile() file: Express.Multer.File, @Request() req) {
		try {
			const mosque = await this.mosqueService.findOne(id);
			if (!mosque) {
				throw new HttpException('Мечеть не найдена', HttpStatus.NOT_FOUND);
			}

			if (req.user.role === Role.CITY_ADMIN && req.user.cityId !== mosque.cityId) {
				throw new HttpException('Запрещено', HttpStatus.FORBIDDEN);
			}

			// Если файл логотипа загружен, обновляем путь к логотипу
			if (file) {
				updateMosqueDto.logoUrl = file.path; // Устанавливаем путь к логотипу
			} else {
				delete updateMosqueDto.logoUrl; // Удаляем свойство, если логотип не передан
			}

			return this.mosqueService.update(id, updateMosqueDto);
		} catch (error) {
			console.log(error);
			throw new HttpException('Ошибка при обновлении мечети', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@Delete(':id')
	@UseGuards(AuthGuard('jwt'), RolesGuard)
	@Roles(Role.SUPER_ADMIN)
	async remove(@Param('id') id: number) {
		try {
			const mosque = await this.mosqueService.remove(id);
			return { message: 'Мечеть успешно удалена' };
		} catch (error) {
			throw new HttpException('Ошибка при удалении мечети', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
