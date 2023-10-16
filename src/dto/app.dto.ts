import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDeviceDto {
  @IsNotEmpty()
  @IsString()
  deviceName: string;

  @IsNotEmpty()
  @IsString()
  ipAddress: string;

  @IsNotEmpty()
  @IsString()
  deviceManufacturer: string;

  @IsNotEmpty()
  @IsString()
  deviceModel: string;
}
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
  deviceName: string;

  @IsNotEmpty()
  @IsString()
  ipAddress: string;

  @IsNotEmpty()
  @IsString()
  deviceManufacturer: string;

  @IsNotEmpty()
  @IsString()
  deviceModel: string;
}

export class TestInput {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
}
