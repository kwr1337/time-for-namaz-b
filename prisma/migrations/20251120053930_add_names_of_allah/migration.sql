-- Создаем таблицу NameOfAllah для хранения имен Аллаха для каждой мечети
CREATE TABLE IF NOT EXISTS "NameOfAllah" (
    "id" SERIAL NOT NULL,
    "mosqueId" INTEGER NOT NULL,
    "arabic" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "transcriptionTatar" TEXT,
    "meaningTatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NameOfAllah_pkey" PRIMARY KEY ("id")
);

-- Создаем уникальный индекс для комбинации mosqueId и arabic
CREATE UNIQUE INDEX IF NOT EXISTS "NameOfAllah_mosqueId_arabic_key" ON "NameOfAllah"("mosqueId", "arabic");

-- Создаем индекс для быстрого поиска по mosqueId
CREATE INDEX IF NOT EXISTS "NameOfAllah_mosqueId_idx" ON "NameOfAllah"("mosqueId");

-- Добавляем внешний ключ для связи с таблицей Mosque
ALTER TABLE "NameOfAllah" ADD CONSTRAINT "NameOfAllah_mosqueId_fkey" FOREIGN KEY ("mosqueId") REFERENCES "Mosque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

