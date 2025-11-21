-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'MOSQUE_ADMIN';

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN "mosqueId" INTEGER;

-- CreateTable
CREATE TABLE "FixedMosquePrayerTime" (
    "id" SERIAL NOT NULL,
    "mosqueId" INTEGER NOT NULL,
    "fajr" TEXT NOT NULL,
    "shuruk" TEXT NOT NULL,
    "zuhr" TEXT NOT NULL,
    "asr" TEXT NOT NULL,
    "maghrib" TEXT NOT NULL,
    "isha" TEXT NOT NULL,
    "mechet" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fajrActive" BOOLEAN NOT NULL DEFAULT false,
    "shurukActive" BOOLEAN NOT NULL DEFAULT false,
    "zuhrActive" BOOLEAN NOT NULL DEFAULT false,
    "asrActive" BOOLEAN NOT NULL DEFAULT false,
    "maghribActive" BOOLEAN NOT NULL DEFAULT false,
    "ishaActive" BOOLEAN NOT NULL DEFAULT false,
    "mechetActive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FixedMosquePrayerTime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FixedMosquePrayerTime_mosqueId_key" ON "FixedMosquePrayerTime"("mosqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_mosqueId_key" ON "Admin"("mosqueId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_mosqueId_fkey" FOREIGN KEY ("mosqueId") REFERENCES "Mosque"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FixedMosquePrayerTime" ADD CONSTRAINT "FixedMosquePrayerTime_mosqueId_fkey" FOREIGN KEY ("mosqueId") REFERENCES "Mosque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

