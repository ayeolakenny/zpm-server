import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/device.request';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  getDevices() {
    return this.deviceService.getDevices();
  }

  @Get(':deviceId')
  getDevice(@Param('deviceId') id: string) {
    return this.deviceService.getDevice(id);
  }

  // @Post('create')
  // async createDevice(@Body() input: CreateDeviceDto, @Res() res: Response) {
  //   await this.deviceService.createDevice(input);
  //   return res.status(201).json({ message: 'Device created' });
  // }
}
