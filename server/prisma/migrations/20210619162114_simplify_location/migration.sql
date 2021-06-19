/*
  Warnings:

  - You are about to drop the column `locationId` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Competition` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Competitor` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_regionId_fkey";

-- DropForeignKey
ALTER TABLE "Competitor" DROP CONSTRAINT "Competitor_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Club" DROP CONSTRAINT "Club_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Competition" DROP CONSTRAINT "Competition_locationId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_locationId_fkey";

-- AlterTable
ALTER TABLE "Club" DROP COLUMN "locationId",
ADD COLUMN     "countryId" INTEGER,
ADD COLUMN     "regionId" INTEGER;

-- AlterTable
ALTER TABLE "Competition" DROP COLUMN "locationId",
ADD COLUMN     "countryId" INTEGER,
ADD COLUMN     "regionId" INTEGER;

-- AlterTable
ALTER TABLE "Competitor" DROP COLUMN "locationId",
ADD COLUMN     "countryId" INTEGER,
ADD COLUMN     "regionId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "locationId",
ADD COLUMN     "countryId" INTEGER,
ADD COLUMN     "regionId" INTEGER;

-- DropTable
DROP TABLE "Location";

-- AddForeignKey
ALTER TABLE "Competitor" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competitor" ADD FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;
