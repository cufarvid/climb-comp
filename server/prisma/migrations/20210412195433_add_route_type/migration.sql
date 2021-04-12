/*
  Warnings:

  - Added the required column `routeType` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RouteType" AS ENUM ('BOULDER', 'LEAD', 'SPEED', 'DUEL');

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "routeType" "RouteType" NOT NULL;
