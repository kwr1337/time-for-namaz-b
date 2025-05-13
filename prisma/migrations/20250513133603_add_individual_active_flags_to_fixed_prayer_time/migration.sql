/*
  Warnings:

  - You are about to drop the column `isActive` on the `FixedPrayerTime` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FixedPrayerTime" DROP COLUMN "isActive",
ADD COLUMN     "asrActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "fajrActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ishaActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "maghribActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "mechetActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "shurukActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "zuhrActive" BOOLEAN NOT NULL DEFAULT true;
