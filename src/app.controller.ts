import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PosData } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test')
  async test(@Body() input: TestInput) {
    return input;
  }

  @Post()
  savePosInfo(@Body() input: PosData) {
    console.log('HIT');
    return this.appService.savePosInfo(input);
  }
}

export class TestInput {
  readonly name: string;
  readonly age: number;
}
