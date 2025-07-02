/*
  Warnings:

  - You are about to alter the column `species` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `gender` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `status` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `Pet` MODIFY `species` ENUM('CANINE', 'FELINE', 'EXOTIC', 'OTHERS') NOT NULL,
    MODIFY `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    MODIFY `sterilization` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('ADMIN', 'VET') NOT NULL DEFAULT 'VET';
