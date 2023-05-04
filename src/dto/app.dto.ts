import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PosData {
  @IsNotEmpty()
  @IsString()
  percentage: string;

  @IsNotEmpty()
  @IsString()
  ipAddress: string;

  @IsNotEmpty()
  @IsBoolean()
  connectedToInternet: boolean;

  @IsNotEmpty()
  @IsBoolean()
  canReachInternet: boolean;

  @IsNotEmpty()
  @IsString()
  typeOfConnection: string;

  @IsNotEmpty()
  @IsString()
  carrierName: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  deviceBrand: string;

  @IsNotEmpty()
  @IsString()
  deviceName: string;

  @IsNotEmpty()
  @IsString()
  deviceManufacturer: string;
}

export class TestInput {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
}
