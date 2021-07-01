const amqp = require('amqplib/callback_api');
import { Message } from './interfaces';

const CONN_URL = 'amqp://guest:guest@localhost:5672';
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
