import { Injectable } from '@nestjs/common';
import { publishToQueue } from './mq.service';
import { Message } from './interfaces';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(message: Message): string {
    publishToQueue('nest-test', message);
    return 'ok';
  }
}
