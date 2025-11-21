import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

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

  // Поля икамата для фаджр
  @ApiProperty({ description: 'Включен ли икамат для фаджр', required: false })
  @IsBoolean()
  @IsOptional()
  fajrIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для фаджр', required: false })
  @IsNumber()
  @IsOptional()
  fajrIqamaMinutes?: number;

  // Поля икамата для шурук
  @ApiProperty({ description: 'Включен ли икамат для шурук', required: false })
  @IsBoolean()
  @IsOptional()
  shurukIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для шурук', required: false })
  @IsNumber()
  @IsOptional()
  shurukIqamaMinutes?: number;

  // Поля икамата для зухр
  @ApiProperty({ description: 'Включен ли икамат для зухр', required: false })
  @IsBoolean()
  @IsOptional()
  zuhrIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для зухр', required: false })
  @IsNumber()
  @IsOptional()
  zuhrIqamaMinutes?: number;

  // Поля икамата для аср
  @ApiProperty({ description: 'Включен ли икамат для аср', required: false })
  @IsBoolean()
  @IsOptional()
  asrIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для аср', required: false })
  @IsNumber()
  @IsOptional()
  asrIqamaMinutes?: number;

  // Поля икамата для магриб
  @ApiProperty({ description: 'Включен ли икамат для магриб', required: false })
  @IsBoolean()
  @IsOptional()
  maghribIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для магриб', required: false })
  @IsNumber()
  @IsOptional()
  maghribIqamaMinutes?: number;

  // Поля икамата для иша
  @ApiProperty({ description: 'Включен ли икамат для иша', required: false })
  @IsBoolean()
  @IsOptional()
  ishaIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для иша', required: false })
  @IsNumber()
  @IsOptional()
  ishaIqamaMinutes?: number;

  // Поля икамата для мечеть
  @ApiProperty({ description: 'Включен ли икамат для мечеть', required: false })
  @IsBoolean()
  @IsOptional()
  mechetIqamaEnabled?: boolean;

  @ApiProperty({ description: 'Количество минут до начала намаза для мечеть', required: false })
  @IsNumber()
  @IsOptional()
  mechetIqamaMinutes?: number;
} 