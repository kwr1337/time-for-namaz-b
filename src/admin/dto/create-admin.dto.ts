import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { $Enums } from '../../../prisma/generated/client'
import Role = $Enums.Role

export class CreateAdminDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;

	@IsEnum(Role)
	role: Role;

	@IsOptional() // Делаем это поле необязательным
	cityId?: number; // ID города
}
