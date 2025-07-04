/*
  Warnings:

  - Made the column `ownerId` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Pet` DROP FOREIGN KEY `Pet_ownerId_fkey`;

-- DropIndex
DROP INDEX `Pet_ownerId_fkey` ON `Pet`;

-- AlterTable
ALTER TABLE `Pet` MODIFY `ownerId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Owner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
