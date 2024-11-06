import { IsInt } from 'class-validator';

export class CreateQRCodeDto {
	@IsInt()
	mosqueId: number;
}
