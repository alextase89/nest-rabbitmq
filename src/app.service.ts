import { Injectable } from '@nestjs/common';
import { publishToQueue } from './mq.service';
import { Message, ResponseMessage } from "./interfaces";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async sendMessage(message: Message): Promise<ResponseMessage> {
    await publishToQueue('nest-test', message);
    return { message: 'message sent' };
  }
}
