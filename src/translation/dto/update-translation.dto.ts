import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTranslationDto {
  @ApiProperty({ description: 'Текст на русском языке', required: false })
  @IsString()
  @IsOptional()
  ru?: string;

  @ApiProperty({ description: 'Текст на татарском языке', required: false })
  @IsString()
  @IsOptional()
  tt?: string;
}

