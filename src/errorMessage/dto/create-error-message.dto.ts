import { IsNotEmpty, IsString } from 'class-validator';

export class CreateErrorMessageDto {
	@IsNotEmpty()
	@IsString()
	message: string;
}
