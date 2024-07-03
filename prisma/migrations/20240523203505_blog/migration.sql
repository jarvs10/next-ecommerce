/*
  Warnings:

  - You are about to drop the column `authorId` on the `blogs` table. All the data in the column will be lost.
  - Made the column `description` on table `blogs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Blogs_authorId_fkey` ON `blogs`;

-- AlterTable
ALTER TABLE `blogs` DROP COLUMN `authorId`,
    MODIFY `description` VARCHAR(191) NOT NULL;
