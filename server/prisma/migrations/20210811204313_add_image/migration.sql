-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "displayImageId" INTEGER;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Competition" ADD FOREIGN KEY ("displayImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
