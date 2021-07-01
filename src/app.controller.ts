import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Message, ResponseMessage } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/send-message')
  sendMessage(@Body() message: Message): Promise<ResponseMessage> {
    return this.appService.sendMessage(message);
  }
}
