/*
  Warnings:

  - You are about to drop the column `birdthDate` on the `Competitor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Competitor" DROP COLUMN "birdthDate",
ADD COLUMN     "birthDate" TIMESTAMP(3);
