/*
  Warnings:

  - Made the column `year` on table `Season` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Season" ALTER COLUMN "year" SET NOT NULL;
