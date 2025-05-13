import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateFixedPrayerTimeDto {
  @IsInt()
  cityId: number;

  @IsString()
  fajr: string;

  @IsString()
  shuruk: string;

  @IsString()
  zuhr: string;

  @IsString()
  asr: string;

  @IsString()
  maghrib: string;

  @IsString()
  isha: string;

  @IsOptional()
  @IsString()
  mechet?: string;

  @IsOptional()
  @IsBoolean()
  fajrActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  shurukActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  zuhrActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  asrActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  maghribActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  ishaActive?: boolean = true;

  @IsOptional()
  @IsBoolean()
  mechetActive?: boolean = true;
} 