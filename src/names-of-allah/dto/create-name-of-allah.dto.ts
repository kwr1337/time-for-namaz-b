import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNameOfAllahDto {
  @ApiProperty({ description: 'Арабское написание имени', example: 'الله' })
  @IsString()
  @IsNotEmpty()
  arabic: string;

  @ApiProperty({ description: 'Транскрипция имени', example: 'Аллах' })
  @IsString()
  @IsNotEmpty()
  transcription: string;

  @ApiProperty({ description: 'Значение имени на русском', example: 'Единый Бог, достойный поклонения' })
  @IsString()
  @IsNotEmpty()
  meaning: string;

  @ApiProperty({ description: 'Транскрипция имени на татарском', required: false, example: 'Аллаһ' })
  @IsString()
  @IsOptional()
  transcriptionTatar?: string;

  @ApiProperty({ description: 'Значение имени на татарском', required: false, example: 'Гыйбадәткә лаек бердәнбер Аллаһ' })
  @IsString()
  @IsOptional()
  meaningTatar?: string;
}

