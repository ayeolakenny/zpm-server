import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  batteryPercentage: string;

  @IsNotEmpty()
  @IsString()
  networkStatus: string;

  @IsNotEmpty()
  @IsString()
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
