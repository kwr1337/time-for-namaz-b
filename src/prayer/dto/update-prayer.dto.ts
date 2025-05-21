import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';

export enum PrayerType {
	FAJR = 'fajr',
	SHURUK = 'shuruk',
	ZUHR = 'zuhr',
	ASR = 'asr',
	MAGHRIB = 'maghrib',
	ISHA = 'isha',
	MECHET = 'mechet'
}

export class UpdatePrayerDto {
	@ApiProperty({ description: 'Тип намаза', enum: PrayerType })
	@IsEnum(PrayerType)
	prayerType: PrayerType;

	@ApiProperty({ description: 'Новое время намаза' })
	@IsString()
	time: string;
}