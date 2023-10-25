import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MetricData } from './dto/metric.request';
import { DeviceStatus } from '@prisma/client';

@Injectable()
export class MetricService {
  constructor(private readonly prisma: PrismaService) {}

  async saveDeviceMetrics(input: MetricData) {
    const {
      batteryPercentage,
      carrierNetwork,
      location,
      networkStatus,
      // Device data
      manufacturer,
      model,
      name,
      ipAddress,
    } = input;

    const device = await this.prisma.device.findFirst({
      where: {
        AND: [{ manufacturer }, { model }, { name }, { ipAddress }],
      },
    });

    let status: DeviceStatus = null;

    if (
      +batteryPercentage <= 30 ||
      networkStatus.toLowerCase() !== 'connected'
    ) {
      status = DeviceStatus.CRITICAL;
    } else status = DeviceStatus.OK;

    if (device) {
      if (device.status !== status) {
        await this.prisma.device.update({
          where: { id: device.id },
          data: { status },
        });
      }

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
          manufacturer,
          model,
          name,
          ipAddress,
          status,
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

  async getMetrics() {
    return await this.prisma.metrics.findMany();
  }
}
