/*
  Warnings:

  - You are about to drop the column `code` on the `QRCode` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `QRCode` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "QRCode_code_key";

-- AlterTable
ALTER TABLE "QRCode" DROP COLUMN "code",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
