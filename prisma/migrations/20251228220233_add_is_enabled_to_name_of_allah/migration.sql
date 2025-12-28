-- Добавляем поле isEnabled в таблицу NameOfAllah
ALTER TABLE "NameOfAllah" ADD COLUMN IF NOT EXISTS "isEnabled" BOOLEAN NOT NULL DEFAULT true;

