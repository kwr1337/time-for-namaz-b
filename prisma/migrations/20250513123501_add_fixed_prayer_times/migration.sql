-- CreateTable
CREATE TABLE "FixedPrayerTime" (
    "id" SERIAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    "fajr" TEXT NOT NULL,
    "shuruk" TEXT NOT NULL,
    "zuhr" TEXT NOT NULL,
    "asr" TEXT NOT NULL,
    "maghrib" TEXT NOT NULL,
    "isha" TEXT NOT NULL,
    "mechet" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FixedPrayerTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FixedPrayerTime" ADD CONSTRAINT "FixedPrayerTime_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
