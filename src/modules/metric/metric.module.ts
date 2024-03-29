import { Module } from '@nestjs/common';
import { MetricService } from './metric.service';
import { MetricController } from './metric.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MetricController],
  providers: [MetricService, PrismaService],
})
export class MetricModule {}
