-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;
