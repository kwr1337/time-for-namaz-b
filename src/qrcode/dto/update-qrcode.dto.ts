import { IsOptional, IsInt, IsBoolean } from 'class-validator';

export class UpdateQRCodeDto {
	@IsOptional()
	@IsInt()
	mosqueId?: number;
	
	@IsOptional()
	@IsBoolean()
	isPrimary?: boolean;
}
