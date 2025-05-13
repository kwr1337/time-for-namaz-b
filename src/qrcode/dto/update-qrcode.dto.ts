import { IsOptional, IsInt, IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQRCodeDto {
	@IsOptional()
	@IsInt()
	mosqueId?: number;
	
	@ApiProperty({ description: 'Является ли QR-код основным', required: false })
	@IsOptional()
	@IsBoolean()
	isPrimary?: boolean;

	@ApiProperty({ description: 'Название проекта (только для дополнительного QR-кода)', required: false })
	@IsOptional()
	@IsString()
	projectName?: string;
}
