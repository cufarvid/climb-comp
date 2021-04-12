/*
  Warnings:

  - You are about to drop the column `registeredById` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the `Judge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setter` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `registrantId` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acceptorId` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Judge" DROP CONSTRAINT "Judge_userId_fkey";

-- DropForeignKey
ALTER TABLE "Setter" DROP CONSTRAINT "Setter_userId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_registeredById_fkey";

-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_judgeId_fkey";

-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_setterId_fkey";

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "registeredById",
ADD COLUMN     "registrantId" INTEGER NOT NULL,
ADD COLUMN     "acceptorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Judge";

-- DropTable
DROP TABLE "Setter";

-- AddForeignKey
ALTER TABLE "Registration" ADD FOREIGN KEY ("registrantId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD FOREIGN KEY ("acceptorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD FOREIGN KEY ("setterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD FOREIGN KEY ("judgeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
