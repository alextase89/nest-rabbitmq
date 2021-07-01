const amqp = require('amqplib/callback_api');

const CONN_URL = 'amqp://guest:guest@localhost:5672';
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume(
      'nest-test',
      function (msg) {
        console.log('.....');
        setTimeout(function () {
          console.log('Message:', JSON.parse(msg.content.toString()));
        }, 4000);
      },
      { noAck: true }, //despues de consumir el msg lo elimina de la cola
    );
  });
});
