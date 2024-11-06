import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateMosqueDto {
	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	logoUrl?: string;

	@IsOptional()
	@IsInt()
	cityId?: number; // ID города, к которому принадлежит мечеть
}
