import { Injectable } from '@nestjs/common';
import { PosData } from './dto/app.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async savePosInfo(input: PosData) {
    const {
      canReachInternet,
      carrierName,
      connectedToInternet,
      country,
      deviceBrand,
      deviceManufacturer,
      deviceName,
      ipAddress,
      percentage,
      typeOfConnection,
    } = input;

    await this.prisma.pos.create({
      data: {
        batteryPercentage: percentage,
        brandName: deviceBrand,
        canReachInternet,
        carrierName,
        connectedToInternet,
        country,
        deviceName,
        ipAddress,
        manufacturer: deviceManufacturer,
        typeOfConnection,
      },
    });

    return true;
  }
}
