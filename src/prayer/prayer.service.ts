import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { Injectable, NotFoundException, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateFixedPrayerTimeDto } from './dto/update-fixed-prayer-time.dto';
import { CreateFixedPrayerTimeDto } from './dto/create-fixed-prayer-time.dto';
import { UpdatePrayerDto } from './dto/update-prayer.dto';
import { logAction } from 'src/common/audit-log.util';

@Injectable()
export class PrayerService {
	constructor(private prisma: PrismaService) {}

	private excelDateToJsDate(excelDate: number): Date {
		// Excel использует систему дат, где 1 = 1 день, а дробная часть = время
		const days = Math.floor(excelDate);
		const fraction = excelDate - days;
		
		// Начало отсчета Excel - 30 декабря 1899
		const date = new Date(Date.UTC(1899, 11, 30));
		
		// Добавляем дни
		date.setUTCDate(date.getUTCDate() + days);
		
		// Добавляем время (в миллисекундах)
		const milliseconds = Math.round(fraction * 24 * 60 * 60 * 1000);
		date.setUTCMilliseconds(date.getUTCMilliseconds() + milliseconds);
		
		return date;
	}

	private formatDate(dateValue: any): string | null {
		if (typeof dateValue === 'number') {
			const jsDate = this.excelDateToJsDate(dateValue);
			return jsDate.toISOString().split('T')[0];
		} else if (typeof dateValue === 'string') {
			// Проверяем формат даты (может быть ДД.ММ.ГГГГ или другой)
			if (dateValue.includes('.')) {
				// Формат ДД.ММ.ГГГГ с точками
				const parts = dateValue.split('.');
				if (parts.length === 3) {
					// Преобразуем в ГГГГ-ММ-ДД
					return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
				}
			} else {
				// Другие форматы строк дат
			const [datePart] = dateValue.split(' ');
				if (datePart.includes('-')) {
					return datePart; // уже в формате YYYY-MM-DD
				}
			}
			console.error('Неподдерживаемый формат даты:', dateValue);
			return null;
		} else {
			console.error('Ожидалось число или строка для даты, но получено:', dateValue);
			return null;
		}
	}

	async getAllPrayersForCity(cityId: number): Promise<any> {
		// Находим все записи намазов для данного города
		const prayers = await this.prisma.prayer.findMany({
			where: { cityId: Number(cityId)  },
		});

		if (!prayers.length) {
			return { message: `Не найдено времени молитв для города с ID "${cityId}"` };
		}

		return prayers;
	}

	async getAllPrayersForMosque(mosqueId: number): Promise<any> {
		// Находим все записи намазов для данной мечети
		const prayers = await this.prisma.prayer.findMany({
			where: { mosqueId: Number(mosqueId) },
			orderBy: { date: 'asc' }
		});

		if (!prayers.length) {
			return { message: `Не найдено времени молитв для мечети с ID "${mosqueId}"` };
		}

		return prayers;
	}

	async getPrayersForMosqueByDate(mosqueId: number, date: string): Promise<any> {
		// Находим мечеть
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) },
			include: { city: true }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		// Получаем фиксированное время мечети (включая настройки икамата)
		// Если его нет, создаем дефолтное (для хранения настроек икамата)
		let fixedTime = await this.prisma.fixedMosquePrayerTime.findUnique({
			where: { mosqueId: mosque.id }
		});

		if (!fixedTime) {
			// Создаем дефолтное фиксированное время для хранения настроек икамата
			fixedTime = await this.prisma.fixedMosquePrayerTime.create({
				data: {
					mosqueId: mosque.id,
					fajr: "00:00",
					shuruk: "00:00",
					zuhr: "00:00",
					asr: "00:00",
					maghrib: "00:00",
					isha: "00:00",
					mechet: "00:00",
					fajrActive: false,
					shurukActive: false,
					zuhrActive: false,
					asrActive: false,
					maghribActive: false,
					ishaActive: false,
					mechetActive: false,
					fajrIqamaEnabled: false,
					fajrIqamaMinutes: 0,
					shurukIqamaEnabled: false,
					shurukIqamaMinutes: 0,
					zuhrIqamaEnabled: false,
					zuhrIqamaMinutes: 0,
					asrIqamaEnabled: false,
					asrIqamaMinutes: 0,
					maghribIqamaEnabled: false,
					maghribIqamaMinutes: 0,
					ishaIqamaEnabled: false,
					ishaIqamaMinutes: 0,
					mechetIqamaEnabled: false,
					mechetIqamaMinutes: 0
				}
			});
		}

		// Находим обычное время намаза для мечети на указанную дату
		let prayer = await this.prisma.prayer.findFirst({
			where: {
				mosqueId: mosque.id,
				date: date
			}
		});

		// Если нет времени для мечети, используем время города как fallback
		if (!prayer) {
			prayer = await this.prisma.prayer.findFirst({
				where: {
					cityId: mosque.cityId,
					date: date,
					mosqueId: null
				}
			});
		}

		if (!prayer) {
			throw new NotFoundException(`Расписание намазов для мечети "${mosque.name}" на дату ${date} не найдено`);
		}

		// Формируем результат с учетом приоритета: фиксированное время -> обычное время мечети -> время города
		const result: any = {
			id: prayer.id,
			mosqueId: mosque.id,
			cityId: mosque.cityId,
			date: prayer.date,
			fajr: prayer.fajr,
			shuruk: prayer.shuruk,
			zuhr: prayer.zuhr,
			asr: prayer.asr,
			maghrib: prayer.maghrib,
			isha: prayer.isha,
			mechet: prayer.mechet,
			mosqueName: mosque.name,
			cityName: mosque.city.name
		};

		// Если есть фиксированное время и намаз активен, используем его для времени намаза
		if (fixedTime) {
			if (fixedTime.fajrActive && fixedTime.fajr) result.fajr = fixedTime.fajr;
			if (fixedTime.shurukActive && fixedTime.shuruk) result.shuruk = fixedTime.shuruk;
			if (fixedTime.zuhrActive && fixedTime.zuhr) result.zuhr = fixedTime.zuhr;
			if (fixedTime.asrActive && fixedTime.asr) result.asr = fixedTime.asr;
			if (fixedTime.maghribActive && fixedTime.maghrib) result.maghrib = fixedTime.maghrib;
			if (fixedTime.ishaActive && fixedTime.isha) result.isha = fixedTime.isha;
			if (fixedTime.mechetActive && fixedTime.mechet) result.mechet = fixedTime.mechet;
		}

		// ВСЕГДА добавляем информацию об икамате (независимо от того, используется фиксированное время или нет)
		// Икамат применяется к любому времени намаза (обычному или фиксированному)
		result.fajrIqama = fixedTime.fajrIqamaEnabled ? {
			enabled: fixedTime.fajrIqamaEnabled,
			minutes: fixedTime.fajrIqamaMinutes
		} : null;
		result.shurukIqama = fixedTime.shurukIqamaEnabled ? {
			enabled: fixedTime.shurukIqamaEnabled,
			minutes: fixedTime.shurukIqamaMinutes
		} : null;
		result.zuhrIqama = fixedTime.zuhrIqamaEnabled ? {
			enabled: fixedTime.zuhrIqamaEnabled,
			minutes: fixedTime.zuhrIqamaMinutes
		} : null;
		result.asrIqama = fixedTime.asrIqamaEnabled ? {
			enabled: fixedTime.asrIqamaEnabled,
			minutes: fixedTime.asrIqamaMinutes
		} : null;
		result.maghribIqama = fixedTime.maghribIqamaEnabled ? {
			enabled: fixedTime.maghribIqamaEnabled,
			minutes: fixedTime.maghribIqamaMinutes
		} : null;
		result.ishaIqama = fixedTime.ishaIqamaEnabled ? {
			enabled: fixedTime.ishaIqamaEnabled,
			minutes: fixedTime.ishaIqamaMinutes
		} : null;
		result.mechetIqama = fixedTime.mechetIqamaEnabled ? {
			enabled: fixedTime.mechetIqamaEnabled,
			minutes: fixedTime.mechetIqamaMinutes
		} : null;

		return result;
	}

	private formatTime(timeValue: any): string | null {
		if (!timeValue) return null;

		if (typeof timeValue === 'number') {
			// Для числового формата из Excel (дробная часть суток)
			const totalMinutes = Math.round(timeValue * 24 * 60);
			const hours = Math.floor(totalMinutes / 60);
			const minutes = totalMinutes % 60;
			return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
		} else if (typeof timeValue === 'string') {
			// Очищаем строку от лишних символов
			const clean = timeValue.trim();
			
			// Если строка — это число, например "0.2375", конвертируем как число
			if (!isNaN(Number(clean))) {
				return this.formatTime(Number(clean));
			}
			
			// Для строк в формате ЧЧ:ММ или ЧЧ:ММ:СС
			const parts = clean.split(':');
			if (parts.length >= 2) {
				const hours = parts[0].trim().padStart(2, '0');
				const minutes = parts[1].trim().split('.')[0].padStart(2, '0'); // Убираем секунды, если есть
				
				// Проверяем, что это числа
				if (isNaN(Number(hours)) || isNaN(Number(minutes))) {
					console.error('Некорректные часы или минуты:', timeValue);
					return null;
				}
				
				return `${hours}:${minutes}`;
			}
			
			// Для других форматов (например, ЧЧ.ММ)
			const dotParts = clean.split('.');
			if (dotParts.length >= 2) {
				const hours = dotParts[0].trim().padStart(2, '0');
				const minutes = dotParts[1].trim().padStart(2, '0');
				
				if (isNaN(Number(hours)) || isNaN(Number(minutes))) {
					console.error('Некорректные часы или минуты (формат с точкой):', timeValue);
					return null;
				}
				
				return `${hours}:${minutes}`;
			}
			
			console.error('Некорректный формат времени:', timeValue);
			return null;
		}
		
		console.error('Ожидалось число или строка для времени, но получено:', timeValue);
		return null;
	}

	// обновление времени
	async shiftPrayerTimesForCity(cityId: number, prayerName: string, shiftMinutes: number, userId: number): Promise<any> {
		// Получаем информацию о городе
		const city = await this.prisma.city.findUnique({
			where: { id: cityId },
			select: { id: true, name: true }
		});
		
		if (!city) {
			throw new Error(`Город с ID "${cityId}" не найден`);
		}
		
		// Получаем только записи города (mosqueId должен быть null)
		const prayers = await this.prisma.prayer.findMany({ 
			where: { 
				cityId: cityId,
				mosqueId: null  // Только записи города, не мечетей
			} 
		});
		if (prayers.length === 0) {
			throw new Error(`Нет записей намазов для города с ID "${cityId}"`);
		}
		const changedPrayers = [];
		for (const prayer of prayers) {
			let updatedTime: string | null = null;
			let oldTime: string | null = null;
			switch (prayerName.toLowerCase()) {
				case 'fajr': oldTime = prayer.fajr; updatedTime = this.shiftTime(prayer.fajr, shiftMinutes); break;
				case 'shuruk': oldTime = prayer.shuruk; updatedTime = this.shiftTime(prayer.shuruk, shiftMinutes); break;
				case 'zuhr': oldTime = prayer.zuhr; updatedTime = this.shiftTime(prayer.zuhr, shiftMinutes); break;
				case 'asr': oldTime = prayer.asr; updatedTime = this.shiftTime(prayer.asr, shiftMinutes); break;
				case 'maghrib': oldTime = prayer.maghrib; updatedTime = this.shiftTime(prayer.maghrib, shiftMinutes); break;
				case 'isha': oldTime = prayer.isha; updatedTime = this.shiftTime(prayer.isha, shiftMinutes); break;
				case 'mechet': oldTime = prayer.mechet; updatedTime = this.shiftTime(prayer.mechet, shiftMinutes); break;
				default: throw new Error(`Неверное название молитвы: "${prayerName}"`);
			}
			if (oldTime === updatedTime) continue;
			await this.prisma.prayer.update({
				where: { id: prayer.id },
				data: { [prayerName.toLowerCase()]: updatedTime },
			});
			changedPrayers.push({
				id: prayer.id,
				prayerType: prayerName.toLowerCase(),
				oldTime,
				newTime: updatedTime,
				date: prayer.date
			});
			const existingChange = await this.prisma.prayerTimeChange.findFirst({
				where: { prayerId: prayer.id, prayerType: prayerName.toLowerCase() },
			});
			let newShift = shiftMinutes;
			if (existingChange) {
				newShift = existingChange.shiftMinutes + shiftMinutes;
				if (newShift === 0) {
					await this.prisma.prayerTimeChange.delete({ where: { id: existingChange.id } });
					continue;
				} else {
					await this.prisma.prayerTimeChange.update({
						where: { id: existingChange.id },
						data: {
							oldTime: existingChange.oldTime,
							newTime: updatedTime ?? '',
							shiftMinutes: newShift,
							changedBy: userId,
						},
					});
					continue;
				}
			} else {
				await this.prisma.prayerTimeChange.create({
					data: {
						prayerId: prayer.id,
						prayerType: prayerName.toLowerCase(),
						oldTime: oldTime ?? '',
						newTime: updatedTime ?? '',
						shiftMinutes: shiftMinutes,
						changedBy: userId,
					},
				});
			}
		}
		// --- Audit log для массового сдвига ---
		if (changedPrayers.length > 0) {
			await logAction(
				this.prisma,
				userId,
				'bulk-update',
				'Prayer',
				cityId,
				{ 
					prayers: changedPrayers.map(pr => ({ 
						id: pr.id, 
						prayerType: pr.prayerType, 
						oldTime: pr.oldTime, 
						date: pr.date 
					})),
					cityInfo: city
				},
				{ 
					prayers: changedPrayers.map(pr => ({ 
						id: pr.id, 
						prayerType: pr.prayerType, 
						newTime: pr.newTime,
						date: pr.date
					})),
					cityInfo: city,
					shiftMinutes: shiftMinutes,
					prayerType: prayerName.toLowerCase()
				}
			);
		}
		// --- End audit log ---
		return { message: `Все ${prayerName} время сдвинуто на ${shiftMinutes} минут в городе с ID "${cityId}"` };
	}

	async shiftPrayerTimesForMosque(mosqueId: number, prayerName: string, shiftMinutes: number, userId: number): Promise<any> {
		// Получаем информацию о мечети
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: mosqueId },
			select: { id: true, name: true, cityId: true, city: { select: { name: true } } }
		});
		
		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID "${mosqueId}" не найдена`);
		}

		// Проверяем права доступа
		const admin = await this.prisma.admin.findUnique({
			where: { id: userId }
		});

		if (!admin) {
			throw new NotFoundException(`Администратор с ID ${userId} не найден`);
		}

		// MOSQUE_ADMIN может управлять только временем своей мечети
		if (admin.role === 'MOSQUE_ADMIN') {
			if (admin.mosqueId !== Number(mosqueId)) {
				throw new BadRequestException('У вас нет прав для управления временем этой мечети');
			}
		}

		// CITY_ADMIN может управлять временем мечетей только своего города
		if (admin.role === 'CITY_ADMIN') {
			if (admin.cityId !== mosque.cityId) {
				throw new BadRequestException('У вас нет прав для управления временем мечетей этого города');
			}
		}
		
		// Получаем только записи этой мечети
		const prayers = await this.prisma.prayer.findMany({ 
			where: { 
				mosqueId: mosqueId
			} 
		});
		if (prayers.length === 0) {
			throw new NotFoundException(`Нет записей намазов для мечети с ID "${mosqueId}"`);
		}

		const changedPrayers = [];
		for (const prayer of prayers) {
			let updatedTime: string | null = null;
			let oldTime: string | null = null;
			switch (prayerName.toLowerCase()) {
				case 'fajr': oldTime = prayer.fajr; updatedTime = this.shiftTime(prayer.fajr, shiftMinutes); break;
				case 'shuruk': oldTime = prayer.shuruk; updatedTime = this.shiftTime(prayer.shuruk, shiftMinutes); break;
				case 'zuhr': oldTime = prayer.zuhr; updatedTime = this.shiftTime(prayer.zuhr, shiftMinutes); break;
				case 'asr': oldTime = prayer.asr; updatedTime = this.shiftTime(prayer.asr, shiftMinutes); break;
				case 'maghrib': oldTime = prayer.maghrib; updatedTime = this.shiftTime(prayer.maghrib, shiftMinutes); break;
				case 'isha': oldTime = prayer.isha; updatedTime = this.shiftTime(prayer.isha, shiftMinutes); break;
				case 'mechet': oldTime = prayer.mechet; updatedTime = this.shiftTime(prayer.mechet, shiftMinutes); break;
				default: throw new BadRequestException(`Неверное название молитвы: "${prayerName}"`);
			}
			if (oldTime === updatedTime) continue;
			await this.prisma.prayer.update({
				where: { id: prayer.id },
				data: { [prayerName.toLowerCase()]: updatedTime },
			});
			changedPrayers.push({
				id: prayer.id,
				prayerType: prayerName.toLowerCase(),
				oldTime,
				newTime: updatedTime,
				date: prayer.date
			});
			const existingChange = await this.prisma.prayerTimeChange.findFirst({
				where: { prayerId: prayer.id, prayerType: prayerName.toLowerCase() },
			});
			let newShift = shiftMinutes;
			if (existingChange) {
				newShift = existingChange.shiftMinutes + shiftMinutes;
				if (newShift === 0) {
					await this.prisma.prayerTimeChange.delete({ where: { id: existingChange.id } });
					continue;
				} else {
					await this.prisma.prayerTimeChange.update({
						where: { id: existingChange.id },
						data: {
							oldTime: existingChange.oldTime,
							newTime: updatedTime ?? '',
							shiftMinutes: newShift,
							changedBy: userId,
						},
					});
					continue;
				}
			} else {
				await this.prisma.prayerTimeChange.create({
					data: {
						prayerId: prayer.id,
						prayerType: prayerName.toLowerCase(),
						oldTime: oldTime ?? '',
						newTime: updatedTime ?? '',
						shiftMinutes: shiftMinutes,
						changedBy: userId,
					},
				});
			}
		}
		// --- Audit log для массового сдвига ---
		if (changedPrayers.length > 0) {
			await logAction(
				this.prisma,
				userId,
				'bulk-update',
				'Prayer',
				mosqueId,
				{ 
					prayers: changedPrayers.map(pr => ({ 
						id: pr.id, 
						prayerType: pr.prayerType, 
						oldTime: pr.oldTime, 
						date: pr.date 
					})),
					mosqueInfo: mosque
				},
				{ 
					prayers: changedPrayers.map(pr => ({ 
						id: pr.id, 
						prayerType: pr.prayerType, 
						newTime: pr.newTime,
						date: pr.date
					})),
					mosqueInfo: mosque,
					shiftMinutes: shiftMinutes,
					prayerType: prayerName.toLowerCase()
				}
			);
		}
		// --- End audit log ---
		return { message: `Все ${prayerName} время сдвинуто на ${shiftMinutes} минут в мечети "${mosque.name}" (ID: ${mosqueId})` };
	}

	private shiftTime(timeString: string | null, shiftMinutes: number): string | null {
		if (!timeString) {
			return null;
		}

		const [hours, minutes] = timeString.split(':').map(Number);
		const date = new Date();
		date.setHours(hours);
		date.setMinutes(minutes + shiftMinutes);

		// Форматируем время обратно в строку "HH:MM"
		const newHours = date.getHours().toString().padStart(2, '0');
		const newMinutes = date.getMinutes().toString().padStart(2, '0');

		return `${newHours}:${newMinutes}`;
	}

	async importFromExcel(filePath: string, userId: number): Promise<any> {
		try {
			// Проверяем существование админа
			const admin = await this.prisma.admin.findUnique({
				where: { id: userId }
			});
			if (!admin) {
				throw new Error(`Администратор с ID ${userId} не найден`);
			}

		const workbook = XLSX.readFile(filePath);
		const sheetName = workbook.SheetNames[0];
			const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: true, defval: null });
			
			console.log('Начало импорта из Excel. Количество строк:', worksheet.length);
			if (worksheet.length > 0) {
				console.log('Первая строка (исходные данные):', worksheet[0]);
			}

			let processed = 0;
			let skipped = 0;
			let errors = [];
			const changedCities: {id: number, name: string, action: string}[] = [];

			// Кэш для городов и мечетей (чтобы не запрашивать каждый раз)
			const cityCache = new Map<string, { id: number; mosques: { id: number }[] }>();
			
			// Группируем данные по городу для оптимизации
			const cityDataMap = new Map<string, Array<{
				date: string;
				fajr: string;
				shuruk: string;
				zuhr: string;
				asr: string;
				maghrib: string;
				isha: string;
				mechet: string | null;
			}>>();

			// Сначала парсим и валидируем все данные
			for (const row of worksheet) {
				try {
					const cityName = String(row['Город'] || '').trim();
					const date = this.formatDate(row['День'] || row['Дата']);
					const fajr = this.formatTime(row['ФАДЖР'] || row['Фаджр']);
					const shuruk = this.formatTime(row['Шурук']);
					const zuhr = this.formatTime(row['Зухр']);
					const asr = this.formatTime(row['АСР'] || row['Аср']);
					const maghrib = this.formatTime(row['МАГРИБ'] || row['Магриб']);
					const isha = this.formatTime(row['ИША'] || row['Иша']);
					const mechet = this.formatTime(row['Мечеть']);

					if (!cityName || !date || !fajr || !shuruk || !zuhr || !asr || !maghrib || !isha) {
						errors.push({ cityName, date, error: 'Неполные данные в строке' });
						skipped++;
						continue;
					}

					if (!cityDataMap.has(cityName)) {
						cityDataMap.set(cityName, []);
					}
					cityDataMap.get(cityName)!.push({
						date,
						fajr,
						shuruk,
						zuhr,
						asr,
						maghrib,
						isha,
						mechet
					});
				} catch (error) {
					console.error('Ошибка при парсинге строки:', error);
					errors.push({ 
						row: processed + skipped + 1, 
						error: error.message,
						data: row 
					});
					skipped++;
				}
			}

			// Обрабатываем данные по городам (батчами по городу)
			const batchSize = 50; // Обрабатываем по 50 дат за раз для каждого города
			for (const [cityName, prayers] of cityDataMap.entries()) {
				try {
					// Получаем или создаем город
					let city = await this.prisma.city.findFirst({ where: { name: cityName } });
					let cityAction = '';

					if (!city) {
						city = await this.prisma.city.create({ data: { name: cityName } });
						cityAction = 'created';
						try { 
							await this.createDefaultFixedPrayerTime(city.id); 
						} catch (error) {
							console.error(`Ошибка создания фиксированного времени для города ${cityName}:`, error);
						}
					}

					// Получаем мечети города (кэшируем)
					if (!cityCache.has(cityName)) {
						const mosques = await this.prisma.mosque.findMany({
							where: { cityId: city.id },
							select: { id: true }
						});
						cityCache.set(cityName, { id: city.id, mosques });
					}
					const cityInfo = cityCache.get(cityName)!;

					// Обрабатываем даты батчами
					for (let i = 0; i < prayers.length; i += batchSize) {
						const batch = prayers.slice(i, i + batchSize);
						
						await this.prisma.$transaction(async (prisma) => {
							// Подготавливаем данные для города
							const cityPrayersToCreate: any[] = [];
							const cityPrayersToUpdate: Array<{ id: number; data: any }> = [];

							// Подготавливаем данные для мечетей
							const mosquePrayersToCreate: any[] = [];
							const mosquePrayersToUpdate: Array<{ id: number; data: any }> = [];

							// Получаем существующие записи для города и мечетей
							const dates = batch.map(p => p.date);
							const existingCityPrayers = await prisma.prayer.findMany({
								where: {
									cityId: cityInfo.id,
									date: { in: dates },
									mosqueId: null
								}
							});

							const existingMosquePrayers = await prisma.prayer.findMany({
								where: {
									cityId: cityInfo.id,
									date: { in: dates },
									mosqueId: { not: null }
								}
							});

							// Создаем мапы для быстрого поиска
							const cityPrayerMap = new Map(existingCityPrayers.map(p => [p.date!, p]));
							const mosquePrayerMap = new Map(
								existingMosquePrayers.map(p => [`${p.mosqueId}-${p.date}`, p])
							);

							// Обрабатываем каждую дату в батче
							for (const prayer of batch) {
								// Для города
								const existingCityPrayer = cityPrayerMap.get(prayer.date);
								if (existingCityPrayer) {
									cityPrayersToUpdate.push({
										id: existingCityPrayer.id,
										data: {
											fajr: prayer.fajr,
											shuruk: prayer.shuruk,
											zuhr: prayer.zuhr,
											asr: prayer.asr,
											maghrib: prayer.maghrib,
											isha: prayer.isha,
											mechet: prayer.mechet
										}
									});
									cityAction = cityAction || 'updated';
								} else {
									cityPrayersToCreate.push({
										cityId: cityInfo.id,
										mosqueId: null,
										date: prayer.date,
										fajr: prayer.fajr,
										shuruk: prayer.shuruk,
										zuhr: prayer.zuhr,
										asr: prayer.asr,
										maghrib: prayer.maghrib,
										isha: prayer.isha,
										mechet: prayer.mechet
									});
									cityAction = cityAction || 'created';
								}

								// Для всех мечетей города
								for (const mosque of cityInfo.mosques) {
									const key = `${mosque.id}-${prayer.date}`;
									const existingMosquePrayer = mosquePrayerMap.get(key);
									
									if (existingMosquePrayer) {
										mosquePrayersToUpdate.push({
											id: existingMosquePrayer.id,
											data: {
												fajr: prayer.fajr,
												shuruk: prayer.shuruk,
												zuhr: prayer.zuhr,
												asr: prayer.asr,
												maghrib: prayer.maghrib,
												isha: prayer.isha,
												mechet: prayer.mechet
											}
										});
									} else {
										mosquePrayersToCreate.push({
											cityId: cityInfo.id,
											mosqueId: mosque.id,
											date: prayer.date,
											fajr: prayer.fajr,
											shuruk: prayer.shuruk,
											zuhr: prayer.zuhr,
											asr: prayer.asr,
											maghrib: prayer.maghrib,
											isha: prayer.isha,
											mechet: prayer.mechet
										});
									}
								}
							}

							// Выполняем массовые операции
							if (cityPrayersToCreate.length > 0) {
								await prisma.prayer.createMany({
									data: cityPrayersToCreate,
									skipDuplicates: true
								});
							}

							if (cityPrayersToUpdate.length > 0) {
								await Promise.all(
									cityPrayersToUpdate.map(({ id, data }) =>
										prisma.prayer.update({ where: { id }, data })
									)
								);
							}

							if (mosquePrayersToCreate.length > 0) {
								await prisma.prayer.createMany({
									data: mosquePrayersToCreate,
									skipDuplicates: true
								});
							}

							if (mosquePrayersToUpdate.length > 0) {
								await Promise.all(
									mosquePrayersToUpdate.map(({ id, data }) =>
										prisma.prayer.update({ where: { id }, data })
									)
								);
							}
						});

						processed += batch.length;
						
						// Логируем прогресс каждые 500 записей
						if (processed % 500 === 0) {
							console.log(`Обработано ${processed} записей из ${worksheet.length}`);
						}
					}

					if (!changedCities.find(c => c.id === city.id)) {
						changedCities.push({ id: city.id, name: city.name, action: cityAction || 'updated' });
					}
				} catch (error) {
					console.error(`Ошибка при обработке города ${cityName}:`, error);
					errors.push({ 
						cityName,
						error: error.message
					});
					skipped += prayers.length;
				}
			}

			// Очищаем временный файл
			try { 
		fs.unlinkSync(filePath);
			} catch (error) {
				console.error('Ошибка при удалении временного файла:', error);
			}

			// Логируем результат импорта
			if (changedCities.length > 0) {
				try {
					await logAction(
						this.prisma,
						userId,
						'bulk-import',
						'City',
						0,
						null,
						{ cities: changedCities }
					);
				} catch (error) {
					console.error('Ошибка при создании записи аудита:', error);
				}
			}

			return { 
				message: 'Импорт завершен', 
				processed, 
				skipped, 
				errors: errors.length > 0 ? errors : undefined,
				cities: changedCities
			};

		} catch (error) {
			console.error('Критическая ошибка при импорте:', error);
			// Очищаем временный файл в случае ошибки
			try { 
				fs.unlinkSync(filePath); 
			} catch (unlinkError) {
				console.error('Ошибка при удалении временного файла:', unlinkError);
			}
			throw new Error(`Ошибка при импорте данных: ${error.message}`);
		}
	}

	async getTodaysPrayersForCity(cityName: string): Promise<any> {
		// Находим город по имени
		const city = await this.prisma.city.findFirst({
			where: { name: cityName }
		});

		if (!city) {
			throw new Error(`Город "${cityName}" не найден`);
		}

		// Получаем текущую дату в формате "YYYY-MM-DD"
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		const todayStr = `${year}-${month}-${day}`;

		// Находим обычное время намаза для этого города на сегодня
		const prayer = await this.prisma.prayer.findFirst({
			where: {
				cityId: city.id,
				date: todayStr
			}
		});

		if (!prayer) {
			throw new Error(`Расписание намазов для города "${cityName}" на сегодня (${todayStr}) не найдено`);
		}

		// Возвращаем только обычное расписание намазов
		return {
			id: prayer.id,
			cityId: prayer.cityId,
			date: prayer.date,
			fajr: prayer.fajr,
			shuruk: prayer.shuruk,
			zuhr: prayer.zuhr,
			asr: prayer.asr,
			maghrib: prayer.maghrib,
			isha: prayer.isha,
			mechet: prayer.mechet,
			cityName: city.name
		};
	}

	async getTodaysPrayersForMosque(mosqueId: number): Promise<any> {
		// Находим мечеть
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) },
			include: { city: true }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		// Получаем текущую дату в формате "YYYY-MM-DD"
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, '0');
		const day = String(today.getDate()).padStart(2, '0');
		const todayStr = `${year}-${month}-${day}`;

		// Получаем фиксированное время мечети (включая настройки икамата)
		// Если его нет, создаем дефолтное (для хранения настроек икамата)
		let fixedTime = await this.prisma.fixedMosquePrayerTime.findUnique({
			where: { mosqueId: mosque.id }
		});

		if (!fixedTime) {
			// Создаем дефолтное фиксированное время для хранения настроек икамата
			fixedTime = await this.prisma.fixedMosquePrayerTime.create({
				data: {
					mosqueId: mosque.id,
					fajr: "00:00",
					shuruk: "00:00",
					zuhr: "00:00",
					asr: "00:00",
					maghrib: "00:00",
					isha: "00:00",
					mechet: "00:00",
					fajrActive: false,
					shurukActive: false,
					zuhrActive: false,
					asrActive: false,
					maghribActive: false,
					ishaActive: false,
					mechetActive: false,
					fajrIqamaEnabled: false,
					fajrIqamaMinutes: 0,
					shurukIqamaEnabled: false,
					shurukIqamaMinutes: 0,
					zuhrIqamaEnabled: false,
					zuhrIqamaMinutes: 0,
					asrIqamaEnabled: false,
					asrIqamaMinutes: 0,
					maghribIqamaEnabled: false,
					maghribIqamaMinutes: 0,
					ishaIqamaEnabled: false,
					ishaIqamaMinutes: 0,
					mechetIqamaEnabled: false,
					mechetIqamaMinutes: 0
				}
			});
		}

		// Находим обычное время намаза для мечети на сегодня
		let prayer = await this.prisma.prayer.findFirst({
			where: {
				mosqueId: mosque.id,
				date: todayStr
			}
		});

		// Если нет времени для мечети, используем время города как fallback
		if (!prayer) {
			prayer = await this.prisma.prayer.findFirst({
				where: {
					cityId: mosque.cityId,
					date: todayStr,
					mosqueId: null
				}
			});
		}

		if (!prayer) {
			throw new NotFoundException(`Расписание намазов для мечети "${mosque.name}" на сегодня (${todayStr}) не найдено`);
		}

		// Формируем результат с учетом приоритета: фиксированное время -> обычное время мечети -> время города
		const result: any = {
			id: prayer.id,
			mosqueId: mosque.id,
			cityId: mosque.cityId,
			date: prayer.date,
			fajr: prayer.fajr,
			shuruk: prayer.shuruk,
			zuhr: prayer.zuhr,
			asr: prayer.asr,
			maghrib: prayer.maghrib,
			isha: prayer.isha,
			mechet: prayer.mechet,
			mosqueName: mosque.name,
			cityName: mosque.city.name
		};

		// Если есть фиксированное время и намаз активен, используем его для времени намаза
		if (fixedTime) {
			if (fixedTime.fajrActive && fixedTime.fajr) result.fajr = fixedTime.fajr;
			if (fixedTime.shurukActive && fixedTime.shuruk) result.shuruk = fixedTime.shuruk;
			if (fixedTime.zuhrActive && fixedTime.zuhr) result.zuhr = fixedTime.zuhr;
			if (fixedTime.asrActive && fixedTime.asr) result.asr = fixedTime.asr;
			if (fixedTime.maghribActive && fixedTime.maghrib) result.maghrib = fixedTime.maghrib;
			if (fixedTime.ishaActive && fixedTime.isha) result.isha = fixedTime.isha;
			if (fixedTime.mechetActive && fixedTime.mechet) result.mechet = fixedTime.mechet;
		}

		// ВСЕГДА добавляем информацию об икамате (независимо от того, используется фиксированное время или нет)
		// Икамат применяется к любому времени намаза (обычному или фиксированному)
		result.fajrIqama = fixedTime.fajrIqamaEnabled ? {
			enabled: fixedTime.fajrIqamaEnabled,
			minutes: fixedTime.fajrIqamaMinutes
		} : null;
		result.shurukIqama = fixedTime.shurukIqamaEnabled ? {
			enabled: fixedTime.shurukIqamaEnabled,
			minutes: fixedTime.shurukIqamaMinutes
		} : null;
		result.zuhrIqama = fixedTime.zuhrIqamaEnabled ? {
			enabled: fixedTime.zuhrIqamaEnabled,
			minutes: fixedTime.zuhrIqamaMinutes
		} : null;
		result.asrIqama = fixedTime.asrIqamaEnabled ? {
			enabled: fixedTime.asrIqamaEnabled,
			minutes: fixedTime.asrIqamaMinutes
		} : null;
		result.maghribIqama = fixedTime.maghribIqamaEnabled ? {
			enabled: fixedTime.maghribIqamaEnabled,
			minutes: fixedTime.maghribIqamaMinutes
		} : null;
		result.ishaIqama = fixedTime.ishaIqamaEnabled ? {
			enabled: fixedTime.ishaIqamaEnabled,
			minutes: fixedTime.ishaIqamaMinutes
		} : null;
		result.mechetIqama = fixedTime.mechetIqamaEnabled ? {
			enabled: fixedTime.mechetIqamaEnabled,
			minutes: fixedTime.mechetIqamaMinutes
		} : null;

		return result;
	}

	async updateFixedPrayerTime(id: number, updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto) {
		if (!updateFixedPrayerTimeDto.userId) {
			throw new BadRequestException('ID пользователя обязателен для обновления времени намаза');
		}

		const prayer = await this.prisma.prayer.findUnique({
			where: { id },
			include: { city: true }
		});

		if (!prayer) {
			throw new NotFoundException(`Намаз с ID ${id} не найден`);
		}

		const oldValues = {
			fajr: prayer.fajr,
			shuruk: prayer.shuruk,
			zuhr: prayer.zuhr,
			asr: prayer.asr,
			maghrib: prayer.maghrib,
			isha: prayer.isha,
			mechet: prayer.mechet
		};

		const updatedPrayer = await this.prisma.prayer.update({
			where: { id },
			data: {
				fajr: updateFixedPrayerTimeDto.fajr,
				shuruk: updateFixedPrayerTimeDto.shuruk,
				zuhr: updateFixedPrayerTimeDto.zuhr,
				asr: updateFixedPrayerTimeDto.asr,
				maghrib: updateFixedPrayerTimeDto.maghrib,
				isha: updateFixedPrayerTimeDto.isha,
				mechet: updateFixedPrayerTimeDto.mechet
			},
			include: { city: true }
		});

		// Проверяем существование админа
		const admin = await this.prisma.admin.findUnique({
			where: { id: updateFixedPrayerTimeDto.userId }
		});

		if (!admin) {
			throw new NotFoundException(`Администратор с ID ${updateFixedPrayerTimeDto.userId} не найден`);
		}

		// Логируем изменения
		await this.prisma.auditLog.create({
			data: {
				userId: updateFixedPrayerTimeDto.userId,
				action: 'update',
				entity: 'Prayer',
				entityId: id,
				oldValue: oldValues,
				newValue: {
					fajr: updatedPrayer.fajr,
					shuruk: updatedPrayer.shuruk,
					zuhr: updatedPrayer.zuhr,
					asr: updatedPrayer.asr,
					maghrib: updatedPrayer.maghrib,
					isha: updatedPrayer.isha,
					mechet: updatedPrayer.mechet,
					cityId: updatedPrayer.cityId,
					cityName: updatedPrayer.city.name
				}
			}
		});

		return updatedPrayer;
	}

	async createFixedPrayerTime(createFixedPrayerTimeDto: CreateFixedPrayerTimeDto): Promise<any> {
		// Проверяем, существует ли город
		const city = await this.prisma.city.findFirst({
			where: { id: Number(createFixedPrayerTimeDto.cityId) }
		});

		if (!city) {
			throw new NotFoundException(`Город с ID ${createFixedPrayerTimeDto.cityId} не найден`);
		}

		// Проверяем, существует ли уже фиксированное время для этого города
		const existingFixedTime = await this.prisma.fixedPrayerTime.findFirst({
			where: { cityId: Number(createFixedPrayerTimeDto.cityId) }
		});

		if (existingFixedTime) {
			return this.updateFixedPrayerTime(createFixedPrayerTimeDto.cityId, createFixedPrayerTimeDto);
		}

		// Создаем запись фиксированного времени
		return this.prisma.fixedPrayerTime.create({
			data: {
				cityId: Number(createFixedPrayerTimeDto.cityId),
				fajr: createFixedPrayerTimeDto.fajr,
				shuruk: createFixedPrayerTimeDto.shuruk,
				zuhr: createFixedPrayerTimeDto.zuhr,
				asr: createFixedPrayerTimeDto.asr,
				maghrib: createFixedPrayerTimeDto.maghrib,
				isha: createFixedPrayerTimeDto.isha,
				mechet: createFixedPrayerTimeDto.mechet,
				fajrActive: createFixedPrayerTimeDto.fajrActive !== undefined ? createFixedPrayerTimeDto.fajrActive : true,
				shurukActive: createFixedPrayerTimeDto.shurukActive !== undefined ? createFixedPrayerTimeDto.shurukActive : true,
				zuhrActive: createFixedPrayerTimeDto.zuhrActive !== undefined ? createFixedPrayerTimeDto.zuhrActive : true,
				asrActive: createFixedPrayerTimeDto.asrActive !== undefined ? createFixedPrayerTimeDto.asrActive : true,
				maghribActive: createFixedPrayerTimeDto.maghribActive !== undefined ? createFixedPrayerTimeDto.maghribActive : true,
				ishaActive: createFixedPrayerTimeDto.ishaActive !== undefined ? createFixedPrayerTimeDto.ishaActive : true,
				mechetActive: createFixedPrayerTimeDto.mechetActive !== undefined ? createFixedPrayerTimeDto.mechetActive : true
			}
		});
	}

	// Метод для автоматического создания фиксированного времени при создании города
	async createDefaultFixedPrayerTime(cityId: number): Promise<any> {
		// Проверяем, существует ли уже фиксированное время для этого города
		const existingFixedTime = await this.prisma.fixedPrayerTime.findFirst({
			where: { cityId: Number(cityId) }
		});

		// Если уже существует, ничего не делаем
		if (existingFixedTime) {
			return existingFixedTime;
		}

		// Создаем запись фиксированного времени с дефолтными значениями
		return this.prisma.fixedPrayerTime.create({
			data: {
				cityId: Number(cityId),
				fajr: "00:00",
				shuruk: "00:00",
				zuhr: "00:00",
				asr: "00:00",
				maghrib: "00:00",
				isha: "00:00",
				mechet: "00:00",
				fajrActive: false,
				shurukActive: false,
				zuhrActive: false,
				asrActive: false,
				maghribActive: false,
				ishaActive: false,
				mechetActive: false
			}
		});
	}

	// Модифицируем getFixedPrayerTimeByCityId, чтобы он создавал запись, если она не существует
	async getFixedPrayerTimeByCityId(cityId: number): Promise<any> {
		const city = await this.prisma.city.findFirst({
			where: { id: Number(cityId) }
		});

		if (!city) {
			throw new NotFoundException(`Город с ID ${cityId} не найден`);
		}

		let fixedPrayerTime = await this.prisma.fixedPrayerTime.findFirst({
			where: { cityId: Number(cityId) }
		});

		// Если фиксированное время не найдено, создаем его
		if (!fixedPrayerTime) {
			fixedPrayerTime = await this.createDefaultFixedPrayerTime(cityId);
		}

		return {
			...fixedPrayerTime,
			cityName: city.name
		};
	}

	// Модифицируем getFixedPrayerTimeByCityName, чтобы он создавал запись, если она не существует
	async getFixedPrayerTimeByCityName(cityName: string): Promise<any> {
		const city = await this.prisma.city.findFirst({
			where: { name: cityName }
		});

		if (!city) {
			throw new NotFoundException(`Город с названием ${cityName} не найден`);
		}

		let fixedPrayerTime = await this.prisma.fixedPrayerTime.findFirst({
			where: { cityId: city.id }
		});

		// Если фиксированное время не найдено, создаем его
		if (!fixedPrayerTime) {
			fixedPrayerTime = await this.createDefaultFixedPrayerTime(city.id);
		}

		return {
			...fixedPrayerTime,
			cityName: city.name
		};
	}

	async getAllFixedPrayerTimes(): Promise<any> {
		// Получаем все фиксированные времена молитв
		const fixedPrayerTimes = await this.prisma.fixedPrayerTime.findMany({
			include: {
				city: {
					select: {
						name: true
					}
				}
			}
		});

		if (!fixedPrayerTimes.length) {
			return { message: 'Фиксированное время намаза не найдено ни для одного города' };
		}

		// Преобразуем результат для удобства использования на клиенте
		return fixedPrayerTimes.map(fixedTime => ({
			...fixedTime,
			cityName: fixedTime.city.name
		}));
	}

	// Метод для создания записей FixedPrayerTime для всех городов
	async createFixedTimesForAllCities(): Promise<any> {
		console.log('Начинаю создание записей FixedPrayerTime для всех городов...');
		
		// Получаем все города
		const cities = await this.prisma.city.findMany();
		console.log(`Найдено ${cities.length} городов`);
		
		let created = 0;
		let alreadyExists = 0;
		
		// Для каждого города проверяем наличие записи в FixedPrayerTime
		for (const city of cities) {
			const existingFixedTime = await this.prisma.fixedPrayerTime.findFirst({
				where: { cityId: city.id }
			});
			
			if (existingFixedTime) {
				console.log(`Город ${city.name} (ID: ${city.id}) уже имеет запись в FixedPrayerTime`);
				alreadyExists++;
				continue;
			}
			
			// Создаем запись с дефолтными значениями
			await this.prisma.fixedPrayerTime.create({
				data: {
					cityId: city.id,
					fajr: "00:00",
					shuruk: "00:00",
					zuhr: "00:00",
					asr: "00:00",
					maghrib: "00:00",
					isha: "00:00",
					mechet: "00:00",
					fajrActive: false,
					shurukActive: false,
					zuhrActive: false,
					asrActive: false,
					maghribActive: false,
					ishaActive: false,
					mechetActive: false
				}
			});
			
			console.log(`Создана запись FixedPrayerTime для города ${city.name} (ID: ${city.id})`);
			created++;
		}
		
		console.log(`Операция завершена. Создано новых записей: ${created}, уже существующих: ${alreadyExists}`);
		
		return { 
			message: 'Операция завершена',
			created,
			alreadyExists,
			total: cities.length
		};
	}

	private calculateTimeShift(oldTime: string, newTime: string): number {
		const [oldHours, oldMinutes] = oldTime.split(':').map(Number);
		const [newHours, newMinutes] = newTime.split(':').map(Number);
		
		const oldTotalMinutes = oldHours * 60 + oldMinutes;
		const newTotalMinutes = newHours * 60 + newMinutes;
		
		return newTotalMinutes - oldTotalMinutes;
	}

	async updatePrayerTime(id: number, prayerType: string, newTime: string, userId: number) {
		const prayer = await this.prisma.prayer.findUnique({ where: { id } });
		if (!prayer) throw new NotFoundException('Намаз не найден');
		const oldTime = prayer[prayerType];
		if (!oldTime) throw new BadRequestException(`Тип намаза ${prayerType} не найден`);
		if (oldTime === newTime) return prayer;
		const [oldHours, oldMinutes] = oldTime.split(':').map(Number);
		const [newHours, newMinutes] = newTime.split(':').map(Number);
		const oldTotalMinutes = oldHours * 60 + oldMinutes;
		const newTotalMinutes = newHours * 60 + newMinutes;
		const shift = newTotalMinutes - oldTotalMinutes;
		const updatedPrayer = await this.prisma.prayer.update({
			where: { id },
			data: { [prayerType]: newTime },
		});
		// --- Audit log ---
		await this.prisma.auditLog.create({
			data: {
				userId,
				action: 'update',
				entity: 'Prayer',
				entityId: id,
				oldValue: { [prayerType]: oldTime },
				newValue: { [prayerType]: newTime },
			},
		});
		// --- End audit log ---
		// Находим существующую запись об изменении для этого намаза и типа
		const existingChange = await this.prisma.prayerTimeChange.findFirst({
			where: { prayerId: id, prayerType },
		});
		let newShift = shift;
		if (existingChange) {
			newShift = existingChange.shiftMinutes + shift;
			if (newShift === 0) {
				await this.prisma.prayerTimeChange.delete({ where: { id: existingChange.id } });
				return updatedPrayer;
			} else {
				await this.prisma.prayerTimeChange.update({
					where: { id: existingChange.id },
					data: {
						oldTime: existingChange.oldTime, // начальное время
						newTime,
						shiftMinutes: newShift,
						changedBy: userId,
					},
				});
				return updatedPrayer;
			}
		} else {
			await this.prisma.prayerTimeChange.create({
				data: {
					prayerId: id,
					prayerType,
					oldTime,
					newTime,
					shiftMinutes: shift,
					changedBy: userId,
				},
			});
			return updatedPrayer;
		}
	}

	async getCityPrayerTimeChanges(cityId: number) {
		// Проверяем существование города
		const city = await this.prisma.city.findUnique({
			where: { id: cityId },
		});

		if (!city) {
			throw new NotFoundException('Город не найден');
		}

		const prayers = await this.prisma.prayer.findMany({
			where: { cityId },
			select: { id: true },
		});

		const prayerIds = prayers.map(p => p.id);

		return this.prisma.prayerTimeChange.findMany({
			where: {
				prayerId: {
					in: prayerIds,
				},
			},
			include: {
				prayer: {
					select: {
						id: true,
						date: true,
						city: {
							select: {
								name: true,
							},
						},
					},
				},
				user: {
					select: {
						id: true,
						email: true,
						role: true,
					},
				},
			},
			orderBy: {
				changedAt: 'desc',
			},
		});
	}

	async getPrayerTimeChanges(prayerId: number) {
		// Проверяем существование намаза
		const prayer = await this.prisma.prayer.findUnique({
			where: { id: prayerId },
		});

		if (!prayer) {
			throw new NotFoundException('Намаз не найден');
		}

		return this.prisma.prayerTimeChange.findMany({
			where: { prayerId },
			include: {
				prayer: {
					select: {
						id: true,
						date: true,
						city: {
							select: {
								name: true,
							},
						},
					},
				},
				user: {
					select: {
						id: true,
						email: true,
						role: true,
					},
				},
			},
			orderBy: {
				changedAt: 'desc',
			},
		});
	}

	async getMosquePrayerTimeChanges(mosqueId: number, userId?: number) {
		// Проверяем существование мечети
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: mosqueId },
			include: { city: { select: { name: true } } }
		});

		if (!mosque) {
			throw new NotFoundException('Мечеть не найдена');
		}

		// Проверяем права доступа
		if (userId) {
			const admin = await this.prisma.admin.findUnique({
				where: { id: userId }
			});

			if (admin) {
				// MOSQUE_ADMIN может видеть изменения только своей мечети
				if (admin.role === 'MOSQUE_ADMIN') {
					if (admin.mosqueId !== Number(mosqueId)) {
						throw new BadRequestException('У вас нет прав для просмотра изменений этой мечети');
					}
				}

				// CITY_ADMIN может видеть изменения мечетей только своего города
				if (admin.role === 'CITY_ADMIN') {
					if (admin.cityId !== mosque.cityId) {
						throw new BadRequestException('У вас нет прав для просмотра изменений мечетей этого города');
					}
				}
			}
		}

		// Получаем все записи намазов для этой мечети
		const prayers = await this.prisma.prayer.findMany({
			where: { 
				mosqueId: mosqueId 
			},
			select: { id: true },
		});

		const prayerIds = prayers.map(p => p.id);

		if (prayerIds.length === 0) {
			return [];
		}

		return this.prisma.prayerTimeChange.findMany({
			where: {
				prayerId: {
					in: prayerIds,
				},
			},
			include: {
				prayer: {
					select: {
						id: true,
						date: true,
						city: {
							select: {
								name: true,
							},
						},
						mosque: {
							select: {
								id: true,
								name: true,
							},
						},
					},
				},
				user: {
					select: {
						id: true,
						email: true,
						role: true,
					},
				},
			},
			orderBy: {
				changedAt: 'desc',
			},
		});
	}

	async togglePrayerTime(cityId: number, prayerType: string, isActive: boolean, userId: number) {
		const fixedTime = await this.prisma.fixedPrayerTime.findFirst({
			where: { cityId },
			include: { city: true }
		});

		if (!fixedTime) {
			throw new NotFoundException(`Фиксированное время для города с ID ${cityId} не найдено`);
		}

		const prayerTypeMap = {
			'fajr': 'fajrActive',
			'shuruk': 'shurukActive',
			'zuhr': 'zuhrActive',
			'asr': 'asrActive',
			'maghrib': 'maghribActive',
			'isha': 'ishaActive',
			'mechet': 'mechetActive'
		};

		const activeField = prayerTypeMap[prayerType.toLowerCase()];
		if (!activeField) {
			throw new BadRequestException(`Неверный тип молитвы: ${prayerType}`);
		}

		const oldValue = fixedTime[activeField];
		if (oldValue === isActive) {
			return fixedTime; // Если значение не изменилось, просто возвращаем текущее состояние
		}

		const updatedFixedTime = await this.prisma.fixedPrayerTime.update({
			where: { id: fixedTime.id },
			data: { [activeField]: isActive },
			include: { city: true }
		});

		// Проверяем существование админа
		const admin = await this.prisma.admin.findUnique({
			where: { id: userId }
		});

		if (admin) {
			// Логируем изменение
			await this.prisma.auditLog.create({
				data: {
					userId: userId,
					action: 'update',
					entity: 'FixedPrayerTime',
					entityId: fixedTime.id,
					oldValue: {
						prayerType: prayerType,
						isActive: oldValue,
						cityId: fixedTime.cityId,
						cityName: fixedTime.city.name
					},
					newValue: {
						prayerType: prayerType,
						isActive: isActive,
						cityId: fixedTime.cityId,
						cityName: fixedTime.city.name
					}
				}
			});
		}

		return updatedFixedTime;
	}

	async updateCityFixedPrayerTime(cityId: number, updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto, userId?: number): Promise<any> {
		// Проверяем, существует ли город
		const city = await this.prisma.city.findFirst({
			where: { id: Number(cityId) }
		});

		if (!city) {
			throw new NotFoundException(`Город с ID ${cityId} не найден`);
		}

		// Проверяем, существует ли уже фиксированное время для этого города
		const existingFixedTime = await this.prisma.fixedPrayerTime.findFirst({
			where: { cityId: Number(cityId) }
		});

		if (!existingFixedTime) {
			throw new NotFoundException(`Фиксированное время намаза для города ${city.name} не найдено`);
		}

		// Сохраняем старые значения для логирования
		const oldValues = {
			fajr: existingFixedTime.fajr,
			shuruk: existingFixedTime.shuruk,
			zuhr: existingFixedTime.zuhr,
			asr: existingFixedTime.asr,
			maghrib: existingFixedTime.maghrib,
			isha: existingFixedTime.isha,
			mechet: existingFixedTime.mechet,
			fajrActive: existingFixedTime.fajrActive,
			shurukActive: existingFixedTime.shurukActive,
			zuhrActive: existingFixedTime.zuhrActive,
			asrActive: existingFixedTime.asrActive,
			maghribActive: existingFixedTime.maghribActive,
			ishaActive: existingFixedTime.ishaActive,
			mechetActive: existingFixedTime.mechetActive
		};

		// Обновляем запись фиксированного времени
		const updatedFixedTime = await this.prisma.fixedPrayerTime.update({
			where: { id: existingFixedTime.id },
			data: {
				fajr: updateFixedPrayerTimeDto.fajr !== undefined ? updateFixedPrayerTimeDto.fajr : undefined,
				shuruk: updateFixedPrayerTimeDto.shuruk !== undefined ? updateFixedPrayerTimeDto.shuruk : undefined,
				zuhr: updateFixedPrayerTimeDto.zuhr !== undefined ? updateFixedPrayerTimeDto.zuhr : undefined,
				asr: updateFixedPrayerTimeDto.asr !== undefined ? updateFixedPrayerTimeDto.asr : undefined,
				maghrib: updateFixedPrayerTimeDto.maghrib !== undefined ? updateFixedPrayerTimeDto.maghrib : undefined,
				isha: updateFixedPrayerTimeDto.isha !== undefined ? updateFixedPrayerTimeDto.isha : undefined,
				mechet: updateFixedPrayerTimeDto.mechet !== undefined ? updateFixedPrayerTimeDto.mechet : undefined
			}
		});

		// Логируем изменения, если передан userId
		if (userId) {
			// Проверяем существование админа
			const admin = await this.prisma.admin.findUnique({
				where: { id: userId }
			});

			if (admin) {
				await this.prisma.auditLog.create({
					data: {
						userId: userId,
						action: 'update',
						entity: 'FixedPrayerTime',
						entityId: existingFixedTime.id,
						oldValue: oldValues,
						newValue: {
							fajr: updatedFixedTime.fajr,
							shuruk: updatedFixedTime.shuruk,
							zuhr: updatedFixedTime.zuhr,
							asr: updatedFixedTime.asr,
							maghrib: updatedFixedTime.maghrib,
							isha: updatedFixedTime.isha,
							mechet: updatedFixedTime.mechet,
							fajrActive: updatedFixedTime.fajrActive,
							shurukActive: updatedFixedTime.shurukActive,
							zuhrActive: updatedFixedTime.zuhrActive,
							asrActive: updatedFixedTime.asrActive,
							maghribActive: updatedFixedTime.maghribActive,
							ishaActive: updatedFixedTime.ishaActive,
							mechetActive: updatedFixedTime.mechetActive,
							cityId: city.id,
							cityName: city.name
						}
					}
				});
			}
		}

		// Возвращаем обновленное фиксированное время с именем города
		return {
			...updatedFixedTime,
			cityName: city.name
		};
	}

	// Методы для работы с FixedMosquePrayerTime

	async getFixedMosquePrayerTimeByMosqueId(mosqueId: number): Promise<any> {
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) },
			include: { city: true }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		let fixedPrayerTime = await this.prisma.fixedMosquePrayerTime.findUnique({
			where: { mosqueId: Number(mosqueId) }
		});

		// Если фиксированное время не найдено, создаем его
		if (!fixedPrayerTime) {
			fixedPrayerTime = await this.prisma.fixedMosquePrayerTime.create({
				data: {
					mosqueId: Number(mosqueId),
					fajr: "00:00",
					shuruk: "00:00",
					zuhr: "00:00",
					asr: "00:00",
					maghrib: "00:00",
					isha: "00:00",
					mechet: "00:00",
					fajrActive: false,
					shurukActive: false,
					zuhrActive: false,
					asrActive: false,
					maghribActive: false,
					ishaActive: false,
					mechetActive: false,
					fajrIqamaEnabled: false,
					fajrIqamaMinutes: 0,
					shurukIqamaEnabled: false,
					shurukIqamaMinutes: 0,
					zuhrIqamaEnabled: false,
					zuhrIqamaMinutes: 0,
					asrIqamaEnabled: false,
					asrIqamaMinutes: 0,
					maghribIqamaEnabled: false,
					maghribIqamaMinutes: 0,
					ishaIqamaEnabled: false,
					ishaIqamaMinutes: 0,
					mechetIqamaEnabled: false,
					mechetIqamaMinutes: 0
				}
			});
		}

		return {
			...fixedPrayerTime,
			mosqueName: mosque.name,
			cityName: mosque.city.name
		};
	}

	async updateFixedMosquePrayerTime(mosqueId: number, updateFixedPrayerTimeDto: UpdateFixedPrayerTimeDto, userId?: number): Promise<any> {
		const mosque = await this.prisma.mosque.findUnique({
			where: { id: Number(mosqueId) },
			include: { city: true }
		});

		if (!mosque) {
			throw new NotFoundException(`Мечеть с ID ${mosqueId} не найдена`);
		}

		// Проверяем права доступа: MOSQUE_ADMIN может редактировать только фиксированное время своей мечети
		if (userId) {
			const admin = await this.prisma.admin.findUnique({
				where: { id: userId }
			});

			if (admin && admin.role === 'MOSQUE_ADMIN') {
				if (admin.mosqueId !== Number(mosqueId)) {
					throw new BadRequestException('У вас нет прав для редактирования фиксированного времени этой мечети');
				}
			}
		}

		const existingFixedTime = await this.prisma.fixedMosquePrayerTime.findUnique({
			where: { mosqueId: Number(mosqueId) }
		});

		if (!existingFixedTime) {
			throw new NotFoundException(`Фиксированное время намаза для мечети "${mosque.name}" не найдено`);
		}

		const oldValues = {
			fajr: existingFixedTime.fajr,
			shuruk: existingFixedTime.shuruk,
			zuhr: existingFixedTime.zuhr,
			asr: existingFixedTime.asr,
			maghrib: existingFixedTime.maghrib,
			isha: existingFixedTime.isha,
			mechet: existingFixedTime.mechet,
			fajrActive: existingFixedTime.fajrActive,
			shurukActive: existingFixedTime.shurukActive,
			zuhrActive: existingFixedTime.zuhrActive,
			asrActive: existingFixedTime.asrActive,
			maghribActive: existingFixedTime.maghribActive,
			ishaActive: existingFixedTime.ishaActive,
			mechetActive: existingFixedTime.mechetActive,
			fajrIqamaEnabled: existingFixedTime.fajrIqamaEnabled,
			fajrIqamaMinutes: existingFixedTime.fajrIqamaMinutes,
			shurukIqamaEnabled: existingFixedTime.shurukIqamaEnabled,
			shurukIqamaMinutes: existingFixedTime.shurukIqamaMinutes,
			zuhrIqamaEnabled: existingFixedTime.zuhrIqamaEnabled,
			zuhrIqamaMinutes: existingFixedTime.zuhrIqamaMinutes,
			asrIqamaEnabled: existingFixedTime.asrIqamaEnabled,
			asrIqamaMinutes: existingFixedTime.asrIqamaMinutes,
			maghribIqamaEnabled: existingFixedTime.maghribIqamaEnabled,
			maghribIqamaMinutes: existingFixedTime.maghribIqamaMinutes,
			ishaIqamaEnabled: existingFixedTime.ishaIqamaEnabled,
			ishaIqamaMinutes: existingFixedTime.ishaIqamaMinutes,
			mechetIqamaEnabled: existingFixedTime.mechetIqamaEnabled,
			mechetIqamaMinutes: existingFixedTime.mechetIqamaMinutes
		};

		// Строим объект data только с теми полями, которые действительно переданы
		const updateData: any = {};
		
		if (updateFixedPrayerTimeDto.fajr !== undefined) updateData.fajr = updateFixedPrayerTimeDto.fajr;
		if (updateFixedPrayerTimeDto.shuruk !== undefined) updateData.shuruk = updateFixedPrayerTimeDto.shuruk;
		if (updateFixedPrayerTimeDto.zuhr !== undefined) updateData.zuhr = updateFixedPrayerTimeDto.zuhr;
		if (updateFixedPrayerTimeDto.asr !== undefined) updateData.asr = updateFixedPrayerTimeDto.asr;
		if (updateFixedPrayerTimeDto.maghrib !== undefined) updateData.maghrib = updateFixedPrayerTimeDto.maghrib;
		if (updateFixedPrayerTimeDto.isha !== undefined) updateData.isha = updateFixedPrayerTimeDto.isha;
		if (updateFixedPrayerTimeDto.mechet !== undefined) updateData.mechet = updateFixedPrayerTimeDto.mechet;
		
		// Поля икамата - важно: проверяем !== undefined, чтобы можно было передать false
		if (updateFixedPrayerTimeDto.fajrIqamaEnabled !== undefined) updateData.fajrIqamaEnabled = updateFixedPrayerTimeDto.fajrIqamaEnabled;
		if (updateFixedPrayerTimeDto.fajrIqamaMinutes !== undefined) updateData.fajrIqamaMinutes = updateFixedPrayerTimeDto.fajrIqamaMinutes;
		if (updateFixedPrayerTimeDto.shurukIqamaEnabled !== undefined) updateData.shurukIqamaEnabled = updateFixedPrayerTimeDto.shurukIqamaEnabled;
		if (updateFixedPrayerTimeDto.shurukIqamaMinutes !== undefined) updateData.shurukIqamaMinutes = updateFixedPrayerTimeDto.shurukIqamaMinutes;
		if (updateFixedPrayerTimeDto.zuhrIqamaEnabled !== undefined) updateData.zuhrIqamaEnabled = updateFixedPrayerTimeDto.zuhrIqamaEnabled;
		if (updateFixedPrayerTimeDto.zuhrIqamaMinutes !== undefined) updateData.zuhrIqamaMinutes = updateFixedPrayerTimeDto.zuhrIqamaMinutes;
		if (updateFixedPrayerTimeDto.asrIqamaEnabled !== undefined) updateData.asrIqamaEnabled = updateFixedPrayerTimeDto.asrIqamaEnabled;
		if (updateFixedPrayerTimeDto.asrIqamaMinutes !== undefined) updateData.asrIqamaMinutes = updateFixedPrayerTimeDto.asrIqamaMinutes;
		if (updateFixedPrayerTimeDto.maghribIqamaEnabled !== undefined) updateData.maghribIqamaEnabled = updateFixedPrayerTimeDto.maghribIqamaEnabled;
		if (updateFixedPrayerTimeDto.maghribIqamaMinutes !== undefined) updateData.maghribIqamaMinutes = updateFixedPrayerTimeDto.maghribIqamaMinutes;
		if (updateFixedPrayerTimeDto.ishaIqamaEnabled !== undefined) updateData.ishaIqamaEnabled = updateFixedPrayerTimeDto.ishaIqamaEnabled;
		if (updateFixedPrayerTimeDto.ishaIqamaMinutes !== undefined) updateData.ishaIqamaMinutes = updateFixedPrayerTimeDto.ishaIqamaMinutes;
		if (updateFixedPrayerTimeDto.mechetIqamaEnabled !== undefined) updateData.mechetIqamaEnabled = updateFixedPrayerTimeDto.mechetIqamaEnabled;
		if (updateFixedPrayerTimeDto.mechetIqamaMinutes !== undefined) updateData.mechetIqamaMinutes = updateFixedPrayerTimeDto.mechetIqamaMinutes;

		const updatedFixedTime = await this.prisma.fixedMosquePrayerTime.update({
			where: { id: existingFixedTime.id },
			data: updateData
		});

		if (userId) {
			const admin = await this.prisma.admin.findUnique({
				where: { id: userId }
			});

			if (admin) {
				try {
					await this.prisma.auditLog.create({
						data: {
							userId: userId,
							action: 'update',
							entity: 'FixedMosquePrayerTime',
							entityId: existingFixedTime.id,
							oldValue: oldValues,
							newValue: {
								fajr: updatedFixedTime.fajr,
								shuruk: updatedFixedTime.shuruk,
								zuhr: updatedFixedTime.zuhr,
								asr: updatedFixedTime.asr,
								maghrib: updatedFixedTime.maghrib,
								isha: updatedFixedTime.isha,
								mechet: updatedFixedTime.mechet,
								fajrActive: updatedFixedTime.fajrActive,
								shurukActive: updatedFixedTime.shurukActive,
								zuhrActive: updatedFixedTime.zuhrActive,
								asrActive: updatedFixedTime.asrActive,
								maghribActive: updatedFixedTime.maghribActive,
								ishaActive: updatedFixedTime.ishaActive,
								mechetActive: updatedFixedTime.mechetActive,
								fajrIqamaEnabled: updatedFixedTime.fajrIqamaEnabled,
								fajrIqamaMinutes: updatedFixedTime.fajrIqamaMinutes,
								shurukIqamaEnabled: updatedFixedTime.shurukIqamaEnabled,
								shurukIqamaMinutes: updatedFixedTime.shurukIqamaMinutes,
								zuhrIqamaEnabled: updatedFixedTime.zuhrIqamaEnabled,
								zuhrIqamaMinutes: updatedFixedTime.zuhrIqamaMinutes,
								asrIqamaEnabled: updatedFixedTime.asrIqamaEnabled,
								asrIqamaMinutes: updatedFixedTime.asrIqamaMinutes,
								maghribIqamaEnabled: updatedFixedTime.maghribIqamaEnabled,
								maghribIqamaMinutes: updatedFixedTime.maghribIqamaMinutes,
								ishaIqamaEnabled: updatedFixedTime.ishaIqamaEnabled,
								ishaIqamaMinutes: updatedFixedTime.ishaIqamaMinutes,
								mechetIqamaEnabled: updatedFixedTime.mechetIqamaEnabled,
								mechetIqamaMinutes: updatedFixedTime.mechetIqamaMinutes,
								mosqueId: mosque.id,
								mosqueName: mosque.name,
								cityName: mosque.city.name
							}
						}
					});
				} catch (error) {
					// Логируем ошибку, но не прерываем выполнение
					console.error('Error creating audit log:', error);
					// Если это ошибка уникального ограничения, просто пропускаем
					if (error.code === 'P2002') {
						console.warn('Audit log entry already exists, skipping...');
					}
					// Для других ошибок тоже не прерываем выполнение
				}
			}
		}

		return {
			...updatedFixedTime,
			mosqueName: mosque.name,
			cityName: mosque.city.name
		};
	}

	async toggleMosquePrayerTime(mosqueId: number, prayerType: string, isActive: boolean, userId: number) {
		const fixedTime = await this.prisma.fixedMosquePrayerTime.findUnique({
			where: { mosqueId: Number(mosqueId) },
			include: { mosque: { include: { city: true } } }
		});

		if (!fixedTime) {
			throw new NotFoundException(`Фиксированное время для мечети с ID ${mosqueId} не найдено`);
		}

		// Проверяем права доступа: MOSQUE_ADMIN может управлять только фиксированным временем своей мечети
		const admin = await this.prisma.admin.findUnique({
			where: { id: userId }
		});

		if (admin && admin.role === 'MOSQUE_ADMIN') {
			if (admin.mosqueId !== Number(mosqueId)) {
				throw new BadRequestException('У вас нет прав для управления фиксированным временем этой мечети');
			}
		}

		const prayerTypeMap = {
			'fajr': 'fajrActive',
			'shuruk': 'shurukActive',
			'zuhr': 'zuhrActive',
			'asr': 'asrActive',
			'maghrib': 'maghribActive',
			'isha': 'ishaActive',
			'mechet': 'mechetActive'
		};

		const activeField = prayerTypeMap[prayerType.toLowerCase()];
		if (!activeField) {
			throw new BadRequestException(`Неверный тип молитвы: ${prayerType}`);
		}

		const oldValue = fixedTime[activeField];
		if (oldValue === isActive) {
			return fixedTime;
		}

		const updatedFixedTime = await this.prisma.fixedMosquePrayerTime.update({
			where: { id: fixedTime.id },
			data: { [activeField]: isActive },
			include: { mosque: { include: { city: true } } }
		});

		if (admin) {
			try {
				await this.prisma.auditLog.create({
					data: {
						userId: userId,
						action: 'update',
						entity: 'FixedMosquePrayerTime',
						entityId: fixedTime.id,
						oldValue: {
							prayerType: prayerType,
							isActive: oldValue,
							mosqueId: fixedTime.mosqueId,
							mosqueName: fixedTime.mosque.name
						},
						newValue: {
							prayerType: prayerType,
							isActive: isActive,
							mosqueId: fixedTime.mosqueId,
							mosqueName: fixedTime.mosque.name
						}
					}
				});
			} catch (error: any) {
				// Логируем ошибку, но не прерываем выполнение
				console.error('Error creating audit log:', error);
				console.error('Error type:', typeof error);
				console.error('Error code:', error?.code);
				console.error('Error message:', error?.message);
				// Если это ошибка уникального ограничения, просто пропускаем
				if (error?.code === 'P2002' || error?.meta?.code === '23505') {
					console.warn('Audit log entry already exists (unique constraint), skipping...');
				} else {
					console.warn('Audit log creation failed, but operation continues:', error?.message || 'Unknown error');
				}
				// НЕ пробрасываем ошибку дальше - операция должна завершиться успешно
			}
		}

		return updatedFixedTime;
	}

}
