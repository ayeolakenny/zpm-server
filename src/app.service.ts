import { Injectable } from '@nestjs/common';
import { CreateDeviceDto, MetricData } from './dto/app.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getDevices() {
    return await this.prisma.device.findMany({
      include: {
        metrics: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  }

  async getDevice(id: string) {
    return await this.prisma.device.findMany({
      where: { id: +id },
      include: { metrics: { orderBy: { createdAt: 'desc' } } },
    });
  }

  async createDevice(input: CreateDeviceDto) {
    await this.prisma.device.create({
      data: input,
    });

    return true;
  }

  async saveDeviceMetrics(input: MetricData) {
    const {
      batteryPercentage,
      carrierNetwork,
      location,
      networkStatus,
      // Device data
      deviceManufacturer,
      deviceModel,
      deviceName,
      ipAddress,
    } = input;

    const device = await this.prisma.device.findFirst({
      where: {
        AND: [
          { deviceManufacturer },
          { deviceModel },
          { deviceName },
          { ipAddress },
        ],
      },
    });

    if (device) {
      await this.prisma.metrics.create({
        data: {
          batteryPercentage,
          carrierNetwork,
          location,
          networkStatus,
          Device: { connect: { id: device.id } },
        },
      });
    } else {
      const newDevice = await this.prisma.device.create({
        data: {
          deviceManufacturer,
          deviceModel,
          deviceName,
          ipAddress,
        },
      });

      await this.prisma.metrics.create({
        data: {
          batteryPercentage,
          carrierNetwork,
          location,
          networkStatus,
          Device: { connect: { id: newDevice.id } },
        },
      });
    }

    return true;
  }
}
