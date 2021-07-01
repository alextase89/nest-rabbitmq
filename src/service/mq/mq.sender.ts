import * as config from '../../prop-config';
import { Message } from '../../interfaces';

const QueueClient = require('./lib/amqp.client');
const CONN_URL = `amqp://${config.rabbit.user}:${config.rabbit.pass}@${config.rabbit.endpoint}`;
const ch = new QueueClient(CONN_URL);
ch.connect();

export const publishToQueue = async (queueName: string, message: Message) => {
  await ch.produce(queueName, JSON.stringify(message));
};
