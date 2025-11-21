import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';

@Injectable()
export class TranslationService {
  constructor(private prisma: PrismaService) {}

  async create(createTranslationDto: CreateTranslationDto) {
    // Проверяем, существует ли уже перевод с таким ключом
    const existing = await this.prisma.translation.findUnique({
      where: { key: createTranslationDto.key }
    });

    if (existing) {
      throw new ConflictException(`Перевод с ключом "${createTranslationDto.key}" уже существует`);
    }

    return this.prisma.translation.create({
      data: createTranslationDto
    });
  }

  async findAll() {
    return this.prisma.translation.findMany({
      orderBy: { key: 'asc' }
    });
  }

  async findByKey(key: string) {
    const translation = await this.prisma.translation.findUnique({
      where: { key }
    });

    if (!translation) {
      throw new NotFoundException(`Перевод с ключом "${key}" не найден`);
    }

    return translation;
  }

  async update(key: string, updateTranslationDto: UpdateTranslationDto) {
    const existing = await this.prisma.translation.findUnique({
      where: { key }
    });

    if (!existing) {
      throw new NotFoundException(`Перевод с ключом "${key}" не найден`);
    }

    return this.prisma.translation.update({
      where: { key },
      data: updateTranslationDto
    });
  }

  async remove(key: string) {
    const existing = await this.prisma.translation.findUnique({
      where: { key }
    });

    if (!existing) {
      throw new NotFoundException(`Перевод с ключом "${key}" не найден`);
    }

    return this.prisma.translation.delete({
      where: { key }
    });
  }

  async getAllAsEntries() {
    const translations = await this.prisma.translation.findMany({
      orderBy: { key: 'asc' }
    });

    return {
      entries: translations.map(t => ({
        key: t.key,
        ru: t.ru,
        tt: t.tt
      }))
    };
  }

  async getEntriesForMosque(mosqueId: number) {
    // Проверяем настройки мечети
    const mosqueSettings = await this.prisma.mosqueLanguageSettings.findUnique({
      where: { mosqueId: Number(mosqueId) }
    });

    // Если переводы выключены для мечети, возвращаем пустой массив
    if (mosqueSettings && !mosqueSettings.translationsEnabled) {
      return {
        entries: [],
        translationsEnabled: false
      };
    }

    // Если настройки не существуют, по умолчанию переводы включены
    const translations = await this.prisma.translation.findMany({
      orderBy: { key: 'asc' }
    });

    return {
      entries: translations.map(t => ({
        key: t.key,
        ru: t.ru,
        tt: t.tt
      })),
      translationsEnabled: true
    };
  }
}

