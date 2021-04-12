/*
  Warnings:

  - Added the required column `competitionId` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "competitionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Route" ADD FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
