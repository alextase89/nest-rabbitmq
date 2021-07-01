import { Injectable } from '@nestjs/common';
import { publishToQueue } from './mq/mq.sender';
import { Message, ResponseMessage } from '../interfaces';

@Injectable()
export class AppService {
  async sendMessage(message: Message): Promise<ResponseMessage> {
    await publishToQueue('nest-test', message);
    return { message: 'message sent' };
  }
}
