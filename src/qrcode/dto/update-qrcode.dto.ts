import { IsOptional, IsInt } from 'class-validator';

export class UpdateQRCodeDto {
	@IsOptional()
	@IsInt()
	mosqueId?: number;
}
