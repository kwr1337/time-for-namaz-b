import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateNameOfAllahDto {
  @ApiProperty({ description: 'Транскрипция имени', required: false })
  @IsString()
  @IsOptional()
  transcription?: string;

  @ApiProperty({ description: 'Значение имени на русском', required: false })
  @IsString()
  @IsOptional()
  meaning?: string;

  @ApiProperty({ description: 'Транскрипция имени на татарском', required: false })
  @IsString()
  @IsOptional()
  transcriptionTatar?: string;

  @ApiProperty({ description: 'Значение имени на татарском', required: false })
  @IsString()
  @IsOptional()
  meaningTatar?: string;

  @ApiProperty({ description: 'Включено ли имя Аллаха для отображения', required: false })
  @IsBoolean()
  @IsOptional()
  isEnabled?: boolean;
}

