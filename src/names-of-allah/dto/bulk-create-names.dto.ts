import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateNameOfAllahDto } from './create-name-of-allah.dto';

export class BulkCreateNamesDto {
  @ApiProperty({ description: 'Массив имен Аллаха', type: [CreateNameOfAllahDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNameOfAllahDto)
  names: CreateNameOfAllahDto[];
}

