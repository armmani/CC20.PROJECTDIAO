/*
  Warnings:

  - You are about to alter the column `weight` on the `Visit` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Visit` MODIFY `weight` DOUBLE NOT NULL;
