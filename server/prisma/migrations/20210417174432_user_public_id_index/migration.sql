/*
  Warnings:

  - A unique constraint covering the columns `[publicId]` on the table `Competitor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[publicId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Competitor.publicId_unique" ON "Competitor"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "User.publicId_unique" ON "User"("publicId");
