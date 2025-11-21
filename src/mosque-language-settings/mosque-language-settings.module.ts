import { Module } from '@nestjs/common';
import { MosqueLanguageSettingsService } from './mosque-language-settings.service';
import { MosqueLanguageSettingsController } from './mosque-language-settings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MosqueLanguageSettingsController],
  providers: [MosqueLanguageSettingsService, PrismaService],
  exports: [MosqueLanguageSettingsService]
})
export class MosqueLanguageSettingsModule {}

