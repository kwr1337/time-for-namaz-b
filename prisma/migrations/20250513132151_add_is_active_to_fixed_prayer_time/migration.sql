/*
  Warnings:

  - A unique constraint covering the columns `[cityId]` on the table `FixedPrayerTime` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FixedPrayerTime" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "FixedPrayerTime_cityId_key" ON "FixedPrayerTime"("cityId");
