import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateFixedPrayerTimeDto {
  @IsOptional()
  @IsString()
  fajr?: string;

  @IsOptional()
  @IsString()
  shuruk?: string;

  @IsOptional()
  @IsString()
  zuhr?: string;

  @IsOptional()
  @IsString()
  asr?: string;

  @IsOptional()
  @IsString()
  maghrib?: string;

  @IsOptional()
  @IsString()
  isha?: string;

  @IsOptional()
  @IsString()
  mechet?: string;

  @IsOptional()
  @IsBoolean()
  fajrActive?: boolean;

  @IsOptional()
  @IsBoolean()
  shurukActive?: boolean;

  @IsOptional()
  @IsBoolean()
  zuhrActive?: boolean;

  @IsOptional()
  @IsBoolean()
  asrActive?: boolean;

  @IsOptional()
  @IsBoolean()
  maghribActive?: boolean;

  @IsOptional()
  @IsBoolean()
  ishaActive?: boolean;

  @IsOptional()
  @IsBoolean()
  mechetActive?: boolean;
} 