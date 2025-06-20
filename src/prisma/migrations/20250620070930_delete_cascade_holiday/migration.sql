-- DropForeignKey
ALTER TABLE `holidays` DROP FOREIGN KEY `holidays_centerId_fkey`;

-- AddForeignKey
ALTER TABLE `holidays` ADD CONSTRAINT `holidays_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `centers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
