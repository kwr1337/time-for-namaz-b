import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateMediaDto {
	@IsNotEmpty()
	@IsString()
	videoUrl: string;

	@IsNotEmpty()
	@IsInt()
	mosqueId: number;
}