import * as config from '../../prop-config';
import { QueueClient } from './lib/amqp.client';

export const listenerMessageQueue = async () => {
  const CONN_URL = `amqp://${config.rabbit.user}:${config.rabbit.pass}@${config.rabbit.endpoint}`;
  const consumer = new QueueClient(CONN_URL, 'nest-test');

  try {
    await consumer.waitForConnection(100, 1000);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }

  await consumer.start(consumeMessage);
};

const consumeMessage = (msg) => {
  if (msg !== null) {
    console.log('consumed msg: ', JSON.parse(msg.content.toString()));
  }
};
