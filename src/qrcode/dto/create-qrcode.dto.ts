import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class CreateQRCodeDto {
	@IsInt()
	mosqueId: number;
	
	@IsOptional()
	@IsBoolean()
	isPrimary?: boolean;
}
