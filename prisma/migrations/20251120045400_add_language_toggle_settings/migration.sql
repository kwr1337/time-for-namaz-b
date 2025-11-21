-- AlterTable
ALTER TABLE "FixedMosquePrayerTime" ADD COLUMN "languageToggleEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "languageToggleIntervalSeconds" INTEGER NOT NULL DEFAULT 30;

