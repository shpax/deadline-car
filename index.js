const config = require('config');
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const { messageListener } = require('./middleware/protocol');
const { mapEventsToVehicleActions } = require('./controllers');

const { EventEmitter } = require('events');
const vehicleEvents = new EventEmitter();

mapEventsToVehicleActions(vehicleEvents);

server.on('message', messageListener(vehicleEvents));

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(config.port);
