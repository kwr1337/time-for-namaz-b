-- CreateTable
CREATE TABLE "PrayerTimeChange" (
    "id" SERIAL NOT NULL,
    "prayerId" INTEGER NOT NULL,
    "prayerType" TEXT NOT NULL,
    "oldTime" TEXT NOT NULL,
    "newTime" TEXT NOT NULL,
    "shiftMinutes" INTEGER NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedBy" INTEGER NOT NULL,

    CONSTRAINT "PrayerTimeChange_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PrayerTimeChange" ADD CONSTRAINT "PrayerTimeChange_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrayerTimeChange" ADD CONSTRAINT "PrayerTimeChange_changedBy_fkey" FOREIGN KEY ("changedBy") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
