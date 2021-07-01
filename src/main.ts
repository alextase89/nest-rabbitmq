import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { listenerMessageQueue } from './service/mq/mq.consumer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await listenerMessageQueue();
}
bootstrap();
