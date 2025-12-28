-- Добавляем поле fridayZuhrAsJomgaEnabled в таблицу MosqueLanguageSettings
ALTER TABLE "MosqueLanguageSettings" ADD COLUMN IF NOT EXISTS "fridayZuhrAsJomgaEnabled" BOOLEAN NOT NULL DEFAULT false;

