import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeviceService {
  constructor(private readonly prisma: PrismaService) {}

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
}
