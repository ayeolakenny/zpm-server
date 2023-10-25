import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class MetricData {
  @IsOptional()
  location: string;

  @IsOptional()
  batteryPercentage: string;

  @IsOptional()
  networkStatus: string;

  @IsOptional()
  carrierNetwork: string;

  // Device Data
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  ipAddress: string;

  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  model: string;
}
