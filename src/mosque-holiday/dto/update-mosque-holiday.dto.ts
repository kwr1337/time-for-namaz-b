import { IsString, IsOptional, IsBoolean, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMosqueHolidayDto {
	@ApiProperty({ description: 'Название праздника на русском', required: false })
	@IsOptional()
	@IsString()
	nameRu?: string;

	@ApiProperty({ description: 'Название праздника на татарском', required: false })
	@IsOptional()
	@IsString()
	nameTatar?: string;

	@ApiProperty({ description: 'Дата начала в формате MM-DD', required: false })
	@IsOptional()
	@IsString()
	@Matches(/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, {
		message: 'startDate должен быть в формате MM-DD (например: 03-01)'
	})
	startDate?: string;

	@ApiProperty({ description: 'Дата окончания в формате MM-DD (опционально)', required: false })
	@IsOptional()
	@IsString()
	@Matches(/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, {
		message: 'endDate должен быть в формате MM-DD (например: 03-30)'
	})
	endDate?: string;

	@ApiProperty({ description: 'Включен ли показ обратного отсчета', required: false })
	@IsOptional()
	@IsBoolean()
	isEnabled?: boolean;
}

