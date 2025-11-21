import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateMosqueLanguageSettingsDto {
  @ApiProperty({ description: 'Включены ли переводы для мечети', required: false })
  @IsBoolean()
  @IsOptional()
  translationsEnabled?: boolean;

  @ApiProperty({ description: 'Включено ли переключение языков', required: false })
  @IsBoolean()
  @IsOptional()
  languageToggleEnabled?: boolean;

  @ApiProperty({ description: 'Интервал переключения языков в секундах', required: false, minimum: 1 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  languageToggleIntervalSeconds?: number;
}

