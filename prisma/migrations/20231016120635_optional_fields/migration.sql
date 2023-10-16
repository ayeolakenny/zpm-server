-- AlterTable
ALTER TABLE "Metrics" ALTER COLUMN "batteryPercentage" DROP NOT NULL,
ALTER COLUMN "carrierNetwork" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "networkStatus" DROP NOT NULL;
