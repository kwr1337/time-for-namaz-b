import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateMosqueLanguageSettingsDto } from './dto/update-mosque-language-settings.dto';

@Injectable()
export class MosqueLanguageSettingsService {
  constructor(private prisma: PrismaService) {}

  async getByMosqueId(mosqueId: number) {
    // Проверяем существование мечети
    const mosque = await this.prisma.mosque.findUnique({
      where: { id: Number(mosqueId) },
      include: { city: true }
    });

    if (!mosque) {
      throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
    }

    // Получаем или создаем настройки
    let settings = await this.prisma.mosqueLanguageSettings.findUnique({
      where: { mosqueId: Number(mosqueId) }
    });

    if (!settings) {
      // Создаем настройки по умолчанию
      settings = await this.prisma.mosqueLanguageSettings.create({
        data: {
          mosqueId: Number(mosqueId),
          translationsEnabled: true,
          languageToggleEnabled: false,
          languageToggleIntervalSeconds: 30
        }
      });
    }

    return {
      ...settings,
      mosqueName: mosque.name,
      cityName: mosque.city.name
    };
  }

  async update(mosqueId: number, updateDto: UpdateMosqueLanguageSettingsDto, userId?: number) {
    // Проверяем существование мечети
    const mosque = await this.prisma.mosque.findUnique({
      where: { id: Number(mosqueId) },
      include: { city: true }
    });

    if (!mosque) {
      throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
    }

    // Проверяем права доступа: MOSQUE_ADMIN может редактировать только настройки своей мечети
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (admin && admin.role === 'MOSQUE_ADMIN') {
        if (admin.mosqueId !== Number(mosqueId)) {
          throw new BadRequestException('У вас нет прав для редактирования настроек этой мечети');
        }
      }
    }

    // Получаем существующие настройки или создаем новые
    let existingSettings = await this.prisma.mosqueLanguageSettings.findUnique({
      where: { mosqueId: Number(mosqueId) }
    });

    const oldValues = existingSettings ? { ...existingSettings } : null;

    if (!existingSettings) {
      // Создаем настройки
      existingSettings = await this.prisma.mosqueLanguageSettings.create({
        data: {
          mosqueId: Number(mosqueId),
          translationsEnabled: updateDto.translationsEnabled ?? true,
          languageToggleEnabled: updateDto.languageToggleEnabled ?? false,
          languageToggleIntervalSeconds: updateDto.languageToggleIntervalSeconds ?? 30
        }
      });
    } else {
      // Обновляем существующие настройки
      const updateData: any = {};
      if (updateDto.translationsEnabled !== undefined) {
        updateData.translationsEnabled = updateDto.translationsEnabled;
      }
      if (updateDto.languageToggleEnabled !== undefined) {
        updateData.languageToggleEnabled = updateDto.languageToggleEnabled;
      }
      if (updateDto.languageToggleIntervalSeconds !== undefined) {
        updateData.languageToggleIntervalSeconds = updateDto.languageToggleIntervalSeconds;
      }

      if (Object.keys(updateData).length > 0) {
        existingSettings = await this.prisma.mosqueLanguageSettings.update({
          where: { id: existingSettings.id },
          data: updateData
        });
      }
    }

    // Создаем audit log
    if (userId) {
      try {
        await this.prisma.auditLog.create({
          data: {
            userId: userId,
            action: oldValues ? 'update' : 'create',
            entity: 'MosqueLanguageSettings',
            entityId: existingSettings.id,
            oldValue: oldValues,
            newValue: {
              translationsEnabled: existingSettings.translationsEnabled,
              languageToggleEnabled: existingSettings.languageToggleEnabled,
              languageToggleIntervalSeconds: existingSettings.languageToggleIntervalSeconds,
              mosqueId: mosque.id,
              mosqueName: mosque.name,
              cityName: mosque.city.name
            }
          }
        });
      } catch (error) {
        console.error('Error creating audit log:', error);
        if (error.code === 'P2002') {
          console.warn('Audit log entry already exists, skipping...');
        }
      }
    }

    return {
      ...existingSettings,
      mosqueName: mosque.name,
      cityName: mosque.city.name
    };
  }
}

