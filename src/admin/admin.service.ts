import { Injectable, NotFoundException, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AdminService {
	constructor(private prisma: PrismaService, private jwtService: JwtService) {}

	async create(createAdminDto: CreateAdminDto) {
		// Проверяем, существует ли админ с таким email
		const existingByEmail = await this.prisma.admin.findUnique({
			where: { email: createAdminDto.email },
		});
		if (existingByEmail) {
			throw new ConflictException(`Админ с email ${createAdminDto.email} уже существует`);
		}

		// Проверяем, занят ли cityId другим админом
		if (createAdminDto.cityId) {
			const existingByCity = await this.prisma.admin.findUnique({
				where: { cityId: createAdminDto.cityId },
			});
			if (existingByCity) {
				throw new ConflictException(`Город с ID ${createAdminDto.cityId} уже имеет админа`);
			}
		}

		// Проверяем, занят ли mosqueId другим админом
		if (createAdminDto.mosqueId) {
			const existingByMosque = await this.prisma.admin.findUnique({
				where: { mosqueId: createAdminDto.mosqueId },
			});
			if (existingByMosque) {
				throw new ConflictException(`Мечеть с ID ${createAdminDto.mosqueId} уже имеет админа`);
			}
		}

		const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
		
		try {
			return await this.prisma.admin.create({
				data: {
					email: createAdminDto.email,
					password: hashedPassword,
					role: createAdminDto.role,
					cityId: createAdminDto.cityId,
					mosqueId: createAdminDto.mosqueId,
				},
			});
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					// Unique constraint failed
					const target = error.meta?.target as string[];
					if (target?.includes('email')) {
						throw new ConflictException(`Админ с email ${createAdminDto.email} уже существует`);
					}
					if (target?.includes('cityId')) {
						throw new ConflictException(`Город с ID ${createAdminDto.cityId} уже имеет админа`);
					}
					if (target?.includes('mosqueId')) {
						throw new ConflictException(`Мечеть с ID ${createAdminDto.mosqueId} уже имеет админа`);
					}
					throw new ConflictException('Нарушено уникальное ограничение');
				}
			}
			throw error;
		}
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
