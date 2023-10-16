import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDeviceDto, MetricData } from './dto/app.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDevices() {
    return this.appService.getDevices();
  }

  @Get(':deviceId')
  getDevice(@Param('deviceId') id: string) {
    return this.appService.getDevice(id);
  }

  @Post('create')
  async createDevice(@Body() input: CreateDeviceDto, @Res() res: Response) {
    await this.appService.createDevice(input);
    return res.status(201).json({ message: 'Device created' });
  }

  @Post('record')
  saveDeviceMetrics(@Body() input: MetricData, @Res() res: Response) {
    this.appService.saveDeviceMetrics(input);
    return res.status(201).json({ message: 'Metric for device recorded' });
  }
}
