const dgram = require('dgram');
const client = dgram.createSocket('udp4');


function sendObj(host, port, obj) {
  const message = new Buffer(JSON.stringify(obj));
  client.send(message, 0, message.length, port, host);
}

module.exports = {
  sendObj,
};