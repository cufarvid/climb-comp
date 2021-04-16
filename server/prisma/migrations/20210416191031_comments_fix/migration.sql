/*
  Warnings:

  - Made the column `content` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "content" SET NOT NULL;

-- AlterTable
ALTER TABLE "ScoreBoulder" ALTER COLUMN "commentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ScoreLead" ALTER COLUMN "commentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ScoreSpeed" ALTER COLUMN "commentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
