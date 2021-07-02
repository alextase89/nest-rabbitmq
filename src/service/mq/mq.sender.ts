import * as config from '../../prop-config';
import { QueueClient } from './lib/amqp.client';
import { Message } from '../../interfaces';

const CONN_URL = `amqp://${config.rabbit.user}:${config.rabbit.pass}@${config.rabbit.endpoint}`;
const ch = new QueueClient(CONN_URL);

(async () => {
  await ch.waitForConnection(100, 1000);
})();

export const publishToQueue = async (queueName: string, message: Message) => {
  await ch.produce(queueName, JSON.stringify(message));
};
