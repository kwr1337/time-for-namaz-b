-- Удаляем поля languageToggle из FixedMosquePrayerTime
ALTER TABLE "FixedMosquePrayerTime" DROP COLUMN IF EXISTS "languageToggleEnabled";
ALTER TABLE "FixedMosquePrayerTime" DROP COLUMN IF EXISTS "languageToggleIntervalSeconds";

-- Создаем таблицу Translation для хранения переводов
CREATE TABLE IF NOT EXISTS "Translation" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "ru" TEXT NOT NULL,
    "tt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- Создаем уникальный индекс для ключа перевода
CREATE UNIQUE INDEX IF NOT EXISTS "Translation_key_key" ON "Translation"("key");

-- Создаем таблицу MosqueLanguageSettings для настроек переключения языков мечети
CREATE TABLE IF NOT EXISTS "MosqueLanguageSettings" (
    "id" SERIAL NOT NULL,
    "mosqueId" INTEGER NOT NULL,
    "languageToggleEnabled" BOOLEAN NOT NULL DEFAULT false,
    "languageToggleIntervalSeconds" INTEGER NOT NULL DEFAULT 30,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MosqueLanguageSettings_pkey" PRIMARY KEY ("id")
);

-- Создаем уникальный индекс для mosqueId
CREATE UNIQUE INDEX IF NOT EXISTS "MosqueLanguageSettings_mosqueId_key" ON "MosqueLanguageSettings"("mosqueId");

-- Добавляем внешний ключ для связи с таблицей Mosque
ALTER TABLE "MosqueLanguageSettings" ADD CONSTRAINT "MosqueLanguageSettings_mosqueId_fkey" FOREIGN KEY ("mosqueId") REFERENCES "Mosque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Заполняем таблицу Translation начальными данными
INSERT INTO "Translation" ("key", "ru", "tt", "createdAt", "updatedAt") VALUES
('hijri.label', 'Дата по хиджре', 'Һиҗри буенча дата', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.label', 'Город', 'Шәһәр', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('mosque.label', 'Мечеть', 'Мәчет', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('help.label', 'Помощь', 'Ярдәм', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('help.mosque', 'мечети', 'мәчеткә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('help.project', 'Проект', 'Проект', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('time.until', 'Через', 'Калган', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('time.now', 'Сейчас', 'Хәзер', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('time.willBe', '', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('time.hour', 'ч', 'сәгать', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('time.min', 'мин', 'минут', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('time.from', '', '', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.monday', 'понедельник', 'дүшәмбе', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.tuesday', 'вторник', 'сишәмбе', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.wednesday', 'среда', 'чәршәмбе', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.thursday', 'четверг', 'пәнҗешәмбе', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.friday', 'пятница', 'җомга', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.saturday', 'суббота', 'шимбә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('weekday.sunday', 'воскресенье', 'якшәмбе', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.1', 'января', 'гыйнвар', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.2', 'февраля', 'февраль', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.3', 'марта', 'март', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.4', 'апреля', 'апрель', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.5', 'мая', 'май', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.6', 'июня', 'июнь', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.7', 'июля', 'июль', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.8', 'августа', 'август', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.9', 'сентября', 'сентябрь', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.10', 'октября', 'октябрь', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.11', 'ноября', 'ноябрь', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('month.12', 'декабря', 'декабрь', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.fajr', 'Фаджр', 'Иртәнге', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.shuruk', 'Шурук', 'Кояш чыга', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.zuhr', 'Зухр', 'Өйлә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.asr', 'Аср', 'Икенде', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.maghrib', 'Магриб', 'Ахшам', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.isha', 'Иша', 'Ястү', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('prayer.mechet', 'Мечеть', 'Мәчет', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('footnote.collective', '* — время, принятое мечетью для проведения коллективного намаза', '* — Җәмәгать намазы өчен мәчет тарафыннан кабул ителгән вакыт', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Казань', 'Казань', 'Казан', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Актаныш', 'Актаныш', 'Актаныш', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Азнакаево', 'Азнакаево', 'Азнакай', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Аксубаево', 'Аксубаево', 'Аксу', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Алексеевское', 'Алексеевское', 'Алексеевское', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Базарные Матаки', 'Базарные Матаки', 'Базар Матакы', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Альметьевск', 'Альметьевск', 'Әлмәт', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Апастово', 'Апастово', 'Апас', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Арск', 'Арск', 'Арча', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Большая Атня', 'Большая Атня', 'Зур Атня', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Бавлы', 'Бавлы', 'Баулы', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Балтаси', 'Балтаси', 'Балтач', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Бугульма', 'Бугульма', 'Бөгелмә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Буинск', 'Буинск', 'Буа', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Верхний Услон', 'Верхний Услон', 'Югары Ослан', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Высокая Гора', 'Высокая Гора', 'Биек Тау', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Старое Дрожжаное', 'Старое Дрожжаное', 'Иске Дрожжаное', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Елабуга', 'Елабуга', 'Алабуга', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Заинск', 'Заинск', 'Зәй', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Зеленодольск', 'Зеленодольск', 'Яшел Үзән', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Большие Кайбицы', 'Большие Кайбицы', 'Зур Кайбыч', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Камское Устье', 'Камское Устье', 'Кама Авызы', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Кукмор', 'Кукмор', 'Күкмәр', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Лаишево', 'Лаишево', 'Лаеш', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Лениногорск', 'Лениногорск', 'Лениногорск', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Мамадыш', 'Мамадыш', 'Мамадыш', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Менделеевск', 'Менделеевск', 'Менделеевск', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Мензелинск', 'Мензелинск', 'Мәнзәлә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Муслюмово', 'Муслюмово', 'Мөслим', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Нижнекамск', 'Нижнекамск', 'Түбән Кама', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Новошешминск', 'Новошешминск', 'Яңа Шәшмә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Нурлат', 'Нурлат', 'Нурлат', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Пестрецы', 'Пестрецы', 'Питрәч', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Рыбная Слобода', 'Рыбная Слобода', 'Балык Бистәсе', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Богатые Сабы', 'Богатые Сабы', 'Бай Саба', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Сарманово', 'Сарманово', 'Сарман', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Болгар', 'Болгар', 'Болгар', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Тетюши', 'Тетюши', 'Тәтеш', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Набережные Челны', 'Набережные Челны', 'Яр Чаллы', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Тюлячи', 'Тюлячи', 'Түләчи', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Черемшан', 'Черемшан', 'Чирмешән', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Чистополь', 'Чистополь', 'Чистай', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Уруссу', 'Уруссу', 'Урысу', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('city.Агрыз', 'Агрыз', 'Агрыз', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.1', 'Мухаррам', 'Мөхәррәм', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.2', 'Сафар', 'Сәфәр', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.3', 'Раби''уль авваль', 'Рабигыль-әүвәл', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.4', 'Раби''у сани', 'Рабигыль-ахыр', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.5', 'Джумадуль уля', 'Җөмадиәл-әүвәл', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.6', 'Джумадуль ахир', 'Җөмадиәл-ахыр', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.7', 'Раджаб', 'Рәҗәп', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.8', 'Ша''абан', 'Шәгъбан', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.9', 'Рамадан', 'Рамазан', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.10', 'Шавваль', 'Шәүвәл', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.11', 'Зуль-ка''да', 'Зөлкагдә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('hijri.month.12', 'Зуль-хиджа', 'Зөлхиҗҗә', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT ("key") DO NOTHING;

