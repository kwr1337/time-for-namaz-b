import {
	Controller,
	Post,
	Body,
	Get,
	Param,
	Patch,
	Delete,
	Req,
	UseGuards, NotFoundException
} from '@nestjs/common'
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../guards/roles.decorator';
import { $Enums } from '../../prisma/generated/client';
import Role = $Enums.Role;

@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@Post('register')
	async create(@Body() createAdminDto: CreateAdminDto) {
		return this.adminService.create(createAdminDto);
	}

	@Post('login')
	async login(@Body() loginAdminDto: LoginAdminDto) {
		const result = await this.adminService.login(loginAdminDto);
		return result; // Возвращаем token объект напрямую
	}

	@UseGuards(AuthGuard('jwt'))
	@Get(':id')
	async findOne(@Param('id') id: string, @Req() req: any) {
		console.log('Requested ID:', id);
		console.log('User from request:', req.user);
		if (id === 'me') {
			return this.adminService.getCurrentAdmin(req.user.id);
		}
		const adminId = parseInt(id, 10);
		if (isNaN(adminId)) {
			throw new NotFoundException('Admin not found'); // Добавить проверку на NaN
		}
		return this.adminService.findOne(adminId);
	}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() updateData: Partial<CreateAdminDto>) {
		return this.adminService.update(parseInt(id, 10), updateData);
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return this.adminService.remove(parseInt(id, 10));
	}

	@UseGuards(AuthGuard('jwt'))
	@Get('me')
	async getProfile(@Req() req) {
		return this.adminService.getCurrentAdmin(req.user.id);
	}

	@Get()
	@Roles(Role.SUPER_ADMIN)
	@UseGuards(AuthGuard('jwt'))
	async findAll() {
		return this.adminService.findAll();
	}

	@Roles(Role.SUPER_ADMIN)
	@Get('admins')
	@UseGuards(AuthGuard('jwt'))
	async findAllAdmins() {
		return this.adminService.findAllCityAdmins(); // Переименуйте метод на более подходящее название, если необходимо
	}
}
