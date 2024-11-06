import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
	constructor(private prisma: PrismaService, private jwtService: JwtService) {}

	async create(createAdminDto: CreateAdminDto) {
		const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
		return this.prisma.admin.create({
			data: {
				email: createAdminDto.email,
				password: hashedPassword,
				role: createAdminDto.role,
				cityId: createAdminDto.cityId, // Добавляем ID города
			},
		});
	}

	async login(loginAdminDto: LoginAdminDto) {
		const admin = await this.prisma.admin.findUnique({
			where: { email: loginAdminDto.email },
		});
		if (!admin || !(await bcrypt.compare(loginAdminDto.password, admin.password))) {
			throw new UnauthorizedException('Invalid credentials');
		}

		// Создаем payload и добавляем id
		const payload = { id: admin.id, role: admin.role };
		console.log('Payload at token creation:', payload); // Логируем для проверки

		const token = this.jwtService.sign(payload);

		return {
			access_token: token,
		};
	}

	async findOne(id: number) {
		if (!id) {
			throw new NotFoundException('Admin ID must be provided');
		}
		console.log(id);
		const admin = await this.prisma.admin.findUnique({ where: { id } });

		if (!admin) {
			throw new NotFoundException(`Admin with ID ${id} not found`);
		}

		return admin;
	}

	async getCurrentAdmin(currentAdminId: number) {
		const admin = await this.prisma.admin.findUnique({
			where: { id: currentAdminId },
		});
		if (!admin) {
			throw new NotFoundException('Admin not found');
		}
		return admin;
	}

	async findAll() {  // Новый метод для получения всех администраторов
		return this.prisma.admin.findMany();
	}

	async update(id: number, updateData: Partial<CreateAdminDto>) {
		return this.prisma.admin.update({
			where: { id },
			data: updateData,
		});
	}

	async remove(id: number) {
		return this.prisma.admin.delete({ where: { id } });
	}

	async findAllCityAdmins() {
		const allAdmins = await this.prisma.admin.findMany({
			where: {
				role: {
					not: 'SUPER_ADMIN', // Исключаем SUPER_ADMIN
				},
			},
			select: {
				id: true,
				email: true,
				role: true,
				cityId: true, // Если вы хотите получить город, привязанный к администратору
			},
		});

		if (!allAdmins || allAdmins.length === 0) {
			throw new NotFoundException('No admins found');
		}

		return allAdmins;
	}


	async generateToken(admin: any) {
		const payload = { id: admin.id, role: admin.role };
		return this.jwtService.sign(payload);
	}
}
