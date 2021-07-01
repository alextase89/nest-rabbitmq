import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { listenerQueue } from './service/mq/mq.consumer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await listenerQueue();
}
bootstrap();
