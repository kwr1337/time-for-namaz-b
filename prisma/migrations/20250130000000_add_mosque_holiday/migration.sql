-- Создаем таблицу MosqueHoliday для хранения праздников для каждой мечети
CREATE TABLE IF NOT EXISTS "MosqueHoliday" (
    "id" SERIAL NOT NULL,
    "mosqueId" INTEGER NOT NULL,
    "nameRu" TEXT NOT NULL,
    "nameTatar" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MosqueHoliday_pkey" PRIMARY KEY ("id")
);

-- Создаем индекс для быстрого поиска по mosqueId
CREATE INDEX IF NOT EXISTS "MosqueHoliday_mosqueId_idx" ON "MosqueHoliday"("mosqueId");

-- Создаем составной индекс для сортировки по mosqueId и startDate
CREATE INDEX IF NOT EXISTS "MosqueHoliday_mosqueId_startDate_idx" ON "MosqueHoliday"("mosqueId", "startDate");

-- Добавляем внешний ключ для связи с таблицей Mosque
ALTER TABLE "MosqueHoliday" ADD CONSTRAINT "MosqueHoliday_mosqueId_fkey" FOREIGN KEY ("mosqueId") REFERENCES "Mosque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

