-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clubId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE SET NULL ON UPDATE CASCADE;
