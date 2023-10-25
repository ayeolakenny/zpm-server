import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './modules/device/device.module';
import { MetricModule } from './modules/metric/metric.module';

@Module({
  imports: [DeviceModule, MetricModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
