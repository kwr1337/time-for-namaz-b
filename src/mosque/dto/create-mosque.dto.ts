import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateMosqueDto {
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	logoUrl?: string;

	@IsInt()
	cityId: number; // ID города, к которому принадлежит мечеть
}
