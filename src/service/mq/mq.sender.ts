import * as config from '../../prop-config';
import { Message } from '../../interfaces';

const amqp = require('amqplib/callback_api');
const CONN_URL = `amqp://${config.rabbit.user}:${config.rabbit.pass}@${config.rabbit.endpoint}`;
let ch = null;

amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

export const publishToQueue = async (queueName: string, message: Message) => {
  ch.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
};

process.on('exit', (code) => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});
