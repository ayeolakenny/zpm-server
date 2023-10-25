import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { MetricService } from './metric.service';
import { MetricData } from './dto/metric.request';

@Controller('metric')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Get()
  getDevices() {
    return this.metricService.getMetrics();
  }

  @Post('')
  saveDeviceMetrics(@Body() input: MetricData, @Res() res: Response) {
    this.metricService.saveDeviceMetrics(input);
    return res.status(201).json({ message: 'Metric for device recorded' });
  }
}
