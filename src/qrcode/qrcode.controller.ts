import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
	UseGuards,
	UseInterceptors,
	UploadedFile, ParseIntPipe
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express';
import { QRCodeService } from './qrcode.service';
import { CreateQRCodeDto } from './dto/create-qrcode.dto';
import { UpdateQRCodeDto } from './dto/update-qrcode.dto';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('qrcodes')
export class QRCodeController {
	constructor(private readonly qrCodeService: QRCodeService) {}

	@Post('/create')
	@UseGuards(AuthGuard('jwt'))
	@UseInterceptors(
		FileInterceptor('image', {
			storage: diskStorage({
				destination: './uploads/qrcodes', // Директория для хранения файлов
				filename: (req, file, callback) => {
					const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
					callback(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
				},
			}),
		}),
	)
	async create(@Body() createQRCodeDto: CreateQRCodeDto, @UploadedFile() image: Express.Multer.File) {
		return this.qrCodeService.create(createQRCodeDto, image);
	}

	@Get()
	async findAll() {
		return this.qrCodeService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id', ParseIntPipe) id: number) {
		return this.qrCodeService.findOne(id);
	}

	@Put(':id')
	@UseGuards(AuthGuard('jwt'))
	@UseInterceptors(
		FileInterceptor('image', {
			storage: diskStorage({
				destination: './uploads/qrcodes',
				filename: (req, file, callback) => {
					const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
					callback(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
				},
			}),
		}),
	)
	async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateQRCodeDto: UpdateQRCodeDto,
		@UploadedFile() image: Express.Multer.File,
	) {
		return this.qrCodeService.update(id, updateQRCodeDto, image);
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt'))
	async remove(@Param('id', ParseIntPipe) id: number) {
		return this.qrCodeService.remove(id);
	}

	@Get('by-mosque/:mosqueId')
	async findByMosque(@Param('mosqueId', ParseIntPipe) mosqueId: number) {
		const qrCode = await this.qrCodeService.findByMosque(mosqueId);
		if (!qrCode) {
			return { message: `QR code for mosque with ID ${mosqueId} not found` };
		}
		return qrCode;
	}
}
