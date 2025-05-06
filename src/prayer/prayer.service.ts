import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PrayerService {
	constructor(private prisma: PrismaService) {}

	private excelDateToJsDate(excelDate: number): Date {
		const EXCEL_EPOCH = new Date(1899, 11, 30);
		return new Date(EXCEL_EPOCH.getTime() + (excelDate * 24 * 60 * 60 * 1000));
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


	private formatTime(timeValue: any): string | null {
		const subtractMinutes = (date: Date, minutes: number) => {
			date.setMinutes(date.getMinutes() - minutes);
			return date;
		};

		const roundToNearestMinute = (date: Date): Date => {
			const seconds = date.getSeconds();
			if (seconds >= 31) {
				date.setMinutes(date.getMinutes() + 1);
			}
			date.setSeconds(0);
			date.setMilliseconds(0);
			return date;
		};

		if (typeof timeValue === 'number') {
			const jsDate = this.excelDateToJsDate(timeValue);
			const adjustedDate = subtractMinutes(jsDate, 30);
			const roundedDate = roundToNearestMinute(adjustedDate);
			const hours = roundedDate.getHours().toString().padStart(2, '0');
			const minutes = roundedDate.getMinutes().toString().padStart(2, '0');
			return `${hours}:${minutes}`;
		} else if (typeof timeValue === 'string') {
			const [hours, minutes, seconds] = timeValue.split(':').map(num => parseInt(num, 10));
			const date = new Date();
			date.setHours(hours, minutes, seconds, 0);
			const adjustedDate = subtractMinutes(date, 30);
			const roundedDate = roundToNearestMinute(adjustedDate);
			const adjustedHours = roundedDate.getHours().toString().padStart(2, '0');
			const adjustedMinutes = roundedDate.getMinutes().toString().padStart(2, '0');
			return `${adjustedHours}:${adjustedMinutes}`;
		} else {
			console.error('Ожидалось число или строка для времени, но получено:', timeValue);
			return null;
		}
	}


	// обновление времени
	async shiftPrayerTimesForCity(cityId: number, prayerName: string, shiftMinutes: number): Promise<any> {

		// Находим все записи намазов для данного города по cityId
		const prayers = await this.prisma.prayer.findMany({
			where: { cityId: cityId },
		});

		// Проверка на наличие молитв
		if (prayers.length === 0) {
			throw new Error(`Нет записей намазов для города с ID "${cityId}"`);
		}

		// Обновляем время для каждого намаза
		for (const prayer of prayers) {
			let updatedTime: string | null = null;

			switch (prayerName.toLowerCase()) {
				case 'fajr':
					updatedTime = this.shiftTime(prayer.fajr, shiftMinutes);
					break;
				case 'shuruk':
					updatedTime = this.shiftTime(prayer.shuruk, shiftMinutes);
					break;
				case 'zuhr':
					updatedTime = this.shiftTime(prayer.zuhr, shiftMinutes);
					break;
				case 'asr':
					updatedTime = this.shiftTime(prayer.asr, shiftMinutes);
					break;
				case 'maghrib':
					updatedTime = this.shiftTime(prayer.maghrib, shiftMinutes);
					break;
				case 'isha':
					updatedTime = this.shiftTime(prayer.isha, shiftMinutes);
					break;
				case 'mechet':
					updatedTime = this.shiftTime(prayer.mechet, shiftMinutes);
					break;
				default:
					throw new Error(`Неверное название молитвы: "${prayerName}"`);
			}

			// Обновляем запись в базе данных
			await this.prisma.prayer.update({
				where: { id: prayer.id },
				data: { [prayerName.toLowerCase()]: updatedTime },
			});
		}

		return { message: `Все ${prayerName} время сдвинуто на ${shiftMinutes} минут в городе с ID "${cityId}"` };
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

	async importFromExcel(filePath: string): Promise<any> {
		const workbook = XLSX.readFile(filePath);
		const sheetName = workbook.SheetNames[0];
		const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
		
		console.log('Начало импорта из Excel. Количество строк:', worksheet.length);
		
		let processed = 0;
		let skipped = 0;
		
		for (const row of worksheet) {
			// Логируем заголовки первой строки для отладки
			if (processed === 0) {
				console.log('Заголовки в Excel файле:', Object.keys(row));
			}
			
			try {
				const cityName = row['Город'] as string;
				const date = this.formatDate(row['День'] || row['Дата']);
				const fajr = this.formatTime(row['ФАДЖР'] || row['Фаджр']);
				const mechet = this.formatTime(row['Мечеть']);
				const shuruk = this.formatTime(row['Шурук']);
				const zuhr = this.formatTime(row['Зухр']);
				const asr = this.formatTime(row['АСР'] || row['Аср']);
				const maghrib = this.formatTime(row['МАГРИБ'] || row['Магриб']);
				const isha = this.formatTime(row['ИША'] || row['Иша']);
				
				console.log(`Обработка строки: Город=${cityName}, Дата=${date}, Фаджр=${fajr}`);
				
				if (!cityName || !date || !fajr || !shuruk || !zuhr || !asr || !maghrib || !isha) {
					console.warn('Пропуск строки из-за неверного формата данных:', 
						{ cityName, date, fajr, shuruk, zuhr, asr, maghrib, isha });
					skipped++;
					continue;
				}
				
				let city = await this.prisma.city.findFirst({
					where: { name: cityName },
				});
				
				if (!city) {
					city = await this.prisma.city.create({
						data: { name: cityName },
					});
				}
				
				const existingPrayer = await this.prisma.prayer.findFirst({
					where: {
						cityId: city.id,
						date,
					},
				});
				
				if (existingPrayer) {
					await this.prisma.prayer.update({
						where: { id: existingPrayer.id },
						data: { fajr, shuruk, zuhr, asr, maghrib, isha, mechet },
					});
				} else {
					await this.prisma.prayer.create({
						data: {
							cityId: city.id,
							date,
							fajr,
							shuruk,
							zuhr,
							asr, 
							maghrib,
							isha,
							mechet,
						},
					});
				}
				
				processed++;
			} catch (error) {
				console.error('Ошибка при импорте строки:', error);
				skipped++;
			}
		}
		
		fs.unlinkSync(filePath);
		
		return { 
			message: 'Данные успешно импортированы или обновлены!',
			processed, 
			skipped 
		};
	}



	async getTodaysPrayersForCity(cityName: string): Promise<any> {
		// Получаем текущую дату в формате YYYY-MM-DD
		const today = new Date().toISOString().split('T')[0];

		// Находим город по имени
		const city = await this.prisma.city.findFirst({
			where: { name: cityName },
		});

		if (!city) {
			throw new Error(`Город с названием "${cityName}" не найден`);
		}

		// Находим записи намазов для города и текущей даты
		const prayers = await this.prisma.prayer.findFirst({
			where: {
				cityId: city.id,
				date: today,  // Фильтруем по текущей дате
			},
		});

		if (!prayers) {
			return { message: `Не найдено время молитв для города" ${cityName} " на ${today}` };
		}

		return prayers;
	}


}
