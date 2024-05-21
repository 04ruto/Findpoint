-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_productId_fkey`;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
