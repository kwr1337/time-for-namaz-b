-- AlterTable
ALTER TABLE "Prayer" ADD COLUMN     "mechet" TEXT,
ADD COLUMN     "mosqueId" INTEGER;

-- AddForeignKey
ALTER TABLE "Prayer" ADD CONSTRAINT "Prayer_mosqueId_fkey" FOREIGN KEY ("mosqueId") REFERENCES "Mosque"("id") ON DELETE SET NULL ON UPDATE CASCADE;
