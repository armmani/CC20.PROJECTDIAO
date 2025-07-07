-- AlterTable
ALTER TABLE `VisitMedication` ADD COLUMN `updatedById` INTEGER NULL;

-- AlterTable
ALTER TABLE `VisitProcedure` ADD COLUMN `updatedById` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `VisitMedication` ADD CONSTRAINT `VisitMedication_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VisitProcedure` ADD CONSTRAINT `VisitProcedure_updatedById_fkey` FOREIGN KEY (`updatedById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
