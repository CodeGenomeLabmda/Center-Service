/*
  Warnings:

  - Added the required column `centerId` to the `holidays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `holidays` ADD COLUMN `centerId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `holidays` ADD CONSTRAINT `holidays_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `centers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
