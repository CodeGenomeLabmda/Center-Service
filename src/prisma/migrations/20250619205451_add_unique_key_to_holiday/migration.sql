/*
  Warnings:

  - A unique constraint covering the columns `[centerId,date]` on the table `holidays` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `holidays_date_key` ON `holidays`;

-- CreateIndex
CREATE UNIQUE INDEX `holidays_centerId_date_key` ON `holidays`(`centerId`, `date`);
