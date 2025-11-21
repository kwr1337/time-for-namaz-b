import { Module } from '@nestjs/common';
import { NamesOfAllahService } from './names-of-allah.service';
import { NamesOfAllahController } from './names-of-allah.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NamesOfAllahController],
  providers: [NamesOfAllahService, PrismaService],
  exports: [NamesOfAllahService]
})
export class NamesOfAllahModule {}

