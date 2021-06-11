/*
  Warnings:

  - Added the required column `round` to the `CategoryRound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryRound" ADD COLUMN     "round" "Round" NOT NULL;
