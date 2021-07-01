import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { Message, ResponseMessage } from '../interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/send-message')
  sendMessage(@Body() message: Message): Promise<ResponseMessage> {
    return this.appService.sendMessage(message);
  }
}
