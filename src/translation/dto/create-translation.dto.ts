import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTranslationDto {
  @ApiProperty({ description: 'Ключ перевода', example: 'hijri.label' })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({ description: 'Текст на русском языке', example: 'Дата по хиджре' })
  @IsString()
  @IsNotEmpty()
  ru: string;

  @ApiProperty({ description: 'Текст на татарском языке', example: 'Һиҗри буенча дата' })
  @IsString()
  @IsNotEmpty()
  tt: string;
}

