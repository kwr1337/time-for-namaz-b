import { IsOptional, IsString } from 'class-validator';

export class UpdateErrorMessageDto {
	@IsOptional()
	@IsString()
	message?: string;
}
