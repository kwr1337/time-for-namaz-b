-- Добавляем поле translationsEnabled в таблицу MosqueLanguageSettings
ALTER TABLE "MosqueLanguageSettings" ADD COLUMN IF NOT EXISTS "translationsEnabled" BOOLEAN NOT NULL DEFAULT true;

-- Обновляем существующие записи, чтобы переводы были включены по умолчанию
UPDATE "MosqueLanguageSettings" SET "translationsEnabled" = true WHERE "translationsEnabled" IS NULL;

