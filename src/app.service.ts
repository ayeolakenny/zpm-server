import { Injectable } from '@nestjs/common';
import { CreateDeviceDto, MetricData } from './dto/app.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createDevice(input: CreateDeviceDto) {
    await this.prisma.device.create({
      data: input,
    });

    return true;
  }

  async saveDeviceMetrics(input: MetricData) {
    const {
      deviceId,
      batteryPercentage,
      carrierNetwork,
      location,
      networkStatus,
    } = input;

    await this.prisma.metrics.create({
      data: {
        batteryPercentage,
        carrierNetwork,
        location,
        networkStatus,
        Device: { connect: { id: deviceId } },
      },
    });

    return true;
  }
}
