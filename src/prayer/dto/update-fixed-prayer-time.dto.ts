import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateFixedPrayerTimeDto {
  @ApiProperty({ description: 'Время фаджр', required: false })
  @IsString()
  @IsOptional()
  fajr?: string;

  @ApiProperty({ description: 'Время шурук', required: false })
  @IsString()
  @IsOptional()
  shuruk?: string;

  @ApiProperty({ description: 'Время зухр', required: false })
  @IsString()
  @IsOptional()
  zuhr?: string;

  @ApiProperty({ description: 'Время аср', required: false })
  @IsString()
  @IsOptional()
  asr?: string;

  @ApiProperty({ description: 'Время магриб', required: false })
  @IsString()
  @IsOptional()
  maghrib?: string;

  @ApiProperty({ description: 'Время иша', required: false })
  @IsString()
  @IsOptional()
  isha?: string;

  @ApiProperty({ description: 'Время мечеть', required: false })
  @IsString()
  @IsOptional()
  mechet?: string;

  @ApiProperty({ description: 'ID пользователя, который внес изменения', required: false })
  @IsNumber()
  @IsOptional()
  userId?: number;
} 