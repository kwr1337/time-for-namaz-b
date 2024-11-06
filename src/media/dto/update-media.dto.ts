import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateMediaDto {
	@IsOptional()
	@IsString()
	videoUrl?: string;

	@IsOptional()
	@IsInt()
	mosqueId?: number;
}