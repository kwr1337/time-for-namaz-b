import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNameOfAllahDto } from './dto/create-name-of-allah.dto';
import { UpdateNameOfAllahDto } from './dto/update-name-of-allah.dto';
import { BulkCreateNamesDto } from './dto/bulk-create-names.dto';
import { defaultNamesOfAllah } from './data/default-names-of-allah';

@Injectable()
export class NamesOfAllahService {
  constructor(private prisma: PrismaService) {}

  /**
   * Получить все имена Аллаха для мечети
   */
  async findAllByMosqueId(mosqueId: number) {
    // Проверяем существование мечети
    const mosque = await this.prisma.mosque.findUnique({
      where: { id: Number(mosqueId) }
    });

    if (!mosque) {
      throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
    }

    return this.prisma.nameOfAllah.findMany({
      where: { mosqueId: Number(mosqueId) },
      orderBy: { id: 'asc' }
    });
  }

  /**
   * Получить одно имя Аллаха по ID
   */
  async findOne(id: number) {
    const name = await this.prisma.nameOfAllah.findUnique({
      where: { id: Number(id) }
    });

    if (!name) {
      throw new NotFoundException(`Имя Аллаха с ID ${id} не найдено`);
    }

    return name;
  }

  /**
   * Создать новое имя Аллаха для мечети
   */
  async create(mosqueId: number, createDto: CreateNameOfAllahDto, userId?: number) {
    // Проверяем существование мечети
    const mosque = await this.prisma.mosque.findUnique({
      where: { id: Number(mosqueId) }
    });

    if (!mosque) {
      throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
    }

    // Проверяем права доступа: MOSQUE_ADMIN может создавать только для своей мечети
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (admin && admin.role === 'MOSQUE_ADMIN') {
        if (admin.mosqueId !== Number(mosqueId)) {
          throw new BadRequestException('У вас нет прав для создания имен Аллаха для этой мечети');
        }
      }
    }

    // Проверяем, не существует ли уже имя с таким arabic для этой мечети
    const existing = await this.prisma.nameOfAllah.findUnique({
      where: {
        mosqueId_arabic: {
          mosqueId: Number(mosqueId),
          arabic: createDto.arabic
        }
      }
    });

    if (existing) {
      throw new BadRequestException(`Имя Аллаха с арабским написанием "${createDto.arabic}" уже существует для этой мечети`);
    }

    return this.prisma.nameOfAllah.create({
      data: {
        mosqueId: Number(mosqueId),
        ...createDto
      }
    });
  }

  /**
   * Обновить имя Аллаха
   */
  async update(id: number, updateDto: UpdateNameOfAllahDto, userId?: number) {
    const existing = await this.prisma.nameOfAllah.findUnique({
      where: { id: Number(id) },
      include: { mosque: true }
    });

    if (!existing) {
      throw new NotFoundException(`Имя Аллаха с ID ${id} не найдено`);
    }

    // Проверяем права доступа: MOSQUE_ADMIN может редактировать только имена своей мечети
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (admin && admin.role === 'MOSQUE_ADMIN') {
        if (admin.mosqueId !== existing.mosqueId) {
          throw new BadRequestException('У вас нет прав для редактирования этого имени Аллаха');
        }
      }
    }

    return this.prisma.nameOfAllah.update({
      where: { id: Number(id) },
      data: updateDto
    });
  }

  /**
   * Удалить имя Аллаха
   */
  async remove(id: number, userId?: number) {
    const existing = await this.prisma.nameOfAllah.findUnique({
      where: { id: Number(id) }
    });

    if (!existing) {
      throw new NotFoundException(`Имя Аллаха с ID ${id} не найдено`);
    }

    // Проверяем права доступа: MOSQUE_ADMIN может удалять только имена своей мечети
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (admin && admin.role === 'MOSQUE_ADMIN') {
        if (admin.mosqueId !== existing.mosqueId) {
          throw new BadRequestException('У вас нет прав для удаления этого имени Аллаха');
        }
      }
    }

    return this.prisma.nameOfAllah.delete({
      where: { id: Number(id) }
    });
  }

  /**
   * Инициализировать имена Аллаха для мечети (создать все 99 имен с базовыми значениями)
   */
  async initializeForMosque(mosqueId: number, userId?: number) {
    // Проверяем существование мечети
    const mosque = await this.prisma.mosque.findUnique({
      where: { id: Number(mosqueId) }
    });

    if (!mosque) {
      throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
    }

    // Проверяем права доступа
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (admin && admin.role === 'MOSQUE_ADMIN') {
        if (admin.mosqueId !== Number(mosqueId)) {
          throw new BadRequestException('У вас нет прав для инициализации имен Аллаха для этой мечети');
        }
      }
    }

    // Проверяем, есть ли уже имена для этой мечети
    const existingCount = await this.prisma.nameOfAllah.count({
      where: { mosqueId: Number(mosqueId) }
    });

    if (existingCount > 0) {
      throw new BadRequestException(`Имена Аллаха для этой мечети уже инициализированы (найдено ${existingCount} имен)`);
    }

    // Создаем все имена из базового набора
    const namesToCreate = defaultNamesOfAllah.map(name => ({
      mosqueId: Number(mosqueId),
      arabic: name.arabic,
      transcription: name.transcription,
      meaning: name.meaning,
      transcriptionTatar: name.transcriptionTatar || null,
      meaningTatar: name.meaningTatar || null
    }));

    await this.prisma.nameOfAllah.createMany({
      data: namesToCreate
    });

    return {
      message: `Создано ${namesToCreate.length} имен Аллаха для мечети`,
      count: namesToCreate.length
    };
  }

  /**
   * Массовое создание/обновление имен Аллаха для мечети
   */
  async bulkUpsert(mosqueId: number, bulkDto: BulkCreateNamesDto, userId?: number) {
    // Проверяем существование мечети
    const mosque = await this.prisma.mosque.findUnique({
      where: { id: Number(mosqueId) }
    });

    if (!mosque) {
      throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
    }

    // Проверяем права доступа
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (admin && admin.role === 'MOSQUE_ADMIN') {
        if (admin.mosqueId !== Number(mosqueId)) {
          throw new BadRequestException('У вас нет прав для массового обновления имен Аллаха для этой мечети');
        }
      }
    }

    // Выполняем upsert для каждого имени
    const results = await Promise.allSettled(
      bulkDto.names.map(name =>
        this.prisma.nameOfAllah.upsert({
          where: {
            mosqueId_arabic: {
              mosqueId: Number(mosqueId),
              arabic: name.arabic
            }
          },
          update: {
            transcription: name.transcription,
            meaning: name.meaning,
            transcriptionTatar: name.transcriptionTatar || null,
            meaningTatar: name.meaningTatar || null
          },
          create: {
            mosqueId: Number(mosqueId),
            arabic: name.arabic,
            transcription: name.transcription,
            meaning: name.meaning,
            transcriptionTatar: name.transcriptionTatar || null,
            meaningTatar: name.meaningTatar || null
          }
        })
      )
    );

    const successful = results.filter(r => r.status === 'fulfilled').length;
    const failed = results.filter(r => r.status === 'rejected').length;

    return {
      message: `Обработано ${successful} имен, ошибок: ${failed}`,
      successful,
      failed
    };
  }

  /**
   * Инициализировать имена Аллаха для всех существующих мечетей
   */
  async initializeForAllMosques(userId?: number) {
    // Проверяем права доступа: только SUPER_ADMIN может инициализировать все мечети
    if (userId) {
      const admin = await this.prisma.admin.findUnique({
        where: { id: userId }
      });

      if (!admin || admin.role !== 'SUPER_ADMIN') {
        throw new BadRequestException('Только SUPER_ADMIN может инициализировать имена для всех мечетей');
      }
    }

    // Получаем все мечети
    const mosques = await this.prisma.mosque.findMany({
      select: { id: true, name: true }
    });

    if (mosques.length === 0) {
      return {
        message: 'Мечети не найдены в базе данных',
        processed: 0,
        skipped: 0,
        created: 0
      };
    }

    let processed = 0;
    let skipped = 0;
    let totalCreated = 0;

    // Для каждой мечети проверяем и создаем имена
    for (const mosque of mosques) {
      // Проверяем, есть ли уже имена для этой мечети
      const existingCount = await this.prisma.nameOfAllah.count({
        where: { mosqueId: mosque.id }
      });

      if (existingCount > 0) {
        skipped++;
        continue;
      }

      // Создаем все имена из базового набора
      const namesToCreate = defaultNamesOfAllah.map(name => ({
        mosqueId: mosque.id,
        arabic: name.arabic,
        transcription: name.transcription,
        meaning: name.meaning,
        transcriptionTatar: name.transcriptionTatar || null,
        meaningTatar: name.meaningTatar || null
      }));

      await this.prisma.nameOfAllah.createMany({
        data: namesToCreate
      });

      processed++;
      totalCreated += namesToCreate.length;
    }

    return {
      message: `Обработано мечетей: ${processed}, пропущено: ${skipped}, создано имен: ${totalCreated}`,
      processed,
      skipped,
      created: totalCreated,
      totalMosques: mosques.length
    };
  }
}

