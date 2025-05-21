import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
	UseInterceptors,
	UploadedFile,
	Put,
	Request
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { QRCodeService } from './qrcode.service';
import { CreateQRCodeDto } from './dto/create-qrcode.dto';
import { UpdateQRCodeDto } from './dto/update-qrcode.dto';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('QR-коды')
@Controller('qrcode')
export class QRCodeController {
	constructor(private readonly qrcodeService: QRCodeService) {}

	@Post()
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Создать новый QR-код' })
	@ApiResponse({ status: 201, description: 'QR-код создан успешно' })
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(
		FileInterceptor('image', {
			storage: diskStorage({
				destination: './uploads/qrcodes',
				filename: (req, file, callback) => {
					const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
					const ext = extname(file.originalname);
					callback(null, `qrcode-${uniqueSuffix}${ext}`);
				},
			}),
		})
	)
	create(@Body() createQrcodeDto: CreateQRCodeDto, @UploadedFile() image: Express.Multer.File, @Request() req: any) {
		return this.qrcodeService.create(createQrcodeDto, image, req.user.id);
	}

	@Get()
	@ApiOperation({ summary: 'Получить все QR-коды' })
	@ApiResponse({ status: 200, description: 'Список всех QR-кодов' })
	findAll() {
		return this.qrcodeService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Получить QR-код по ID' })
	@ApiResponse({ status: 200, description: 'QR-код найден' })
	@ApiResponse({ status: 404, description: 'QR-код не найден' })
	findOne(@Param('id') id: string) {
		return this.qrcodeService.findOne(+id);
	}

	@Put(':id')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Обновить QR-код' })
	@ApiResponse({ status: 200, description: 'QR-код обновлен успешно' })
	@ApiResponse({ status: 404, description: 'QR-код не найден' })
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(
		FileInterceptor('image', {
			storage: diskStorage({
				destination: './uploads/qrcodes',
				filename: (req, file, callback) => {
					const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
					const ext = extname(file.originalname);
					callback(null, `qrcode-${uniqueSuffix}${ext}`);
				},
			}),
		})
	)
	update(@Param('id') id: string, @Body() updateQrcodeDto: UpdateQRCodeDto, @UploadedFile() image: Express.Multer.File, @Request() req: any) {
		return this.qrcodeService.update(+id, updateQrcodeDto, req.user.id, image);
	}

	@Delete(':id')
	@UseGuards(AuthGuard('jwt'))
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Удалить QR-код' })
	@ApiResponse({ status: 200, description: 'QR-код удален успешно' })
	@ApiResponse({ status: 404, description: 'QR-код не найден' })
	remove(@Param('id') id: string, @Request() req: any) {
		return this.qrcodeService.remove(+id, req.user.id);
	}

	@Get('by-mosque/:mosqueId')
	@ApiOperation({ summary: 'Получить QR-коды по ID мечети' })
	@ApiResponse({ status: 200, description: 'QR-коды найдены' })
	@ApiResponse({ status: 404, description: 'QR-коды не найдены' })
	findByMosque(@Param('mosqueId') mosqueId: string) {
		return this.qrcodeService.findByMosque(+mosqueId);
	}
}
