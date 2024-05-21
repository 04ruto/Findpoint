/*
  Warnings:

  - Made the column `price` on table `cart` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `cart` MODIFY `price` DOUBLE NOT NULL;
