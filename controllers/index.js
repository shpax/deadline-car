const { leftMotor, rightMotor, batteryPin } = require('../models/vehicle');
const { sendObj } = require('../models/udpClient');

const interfaces = {};

function setDriveSpeed(command) {
  const { lf = true, ls = 0, rf = true, rs = 0} = command;

  console.log('speed change', command);

  interfaces.leftMotor[lf ? 'forward' : 'reverse'](ls);
  interfaces.rightMotor[rf ? 'forward' : 'reverse'](rs);
}

function getBatteryLevel(host, port) {
  interfaces.batteryPin.query(({ value }) => {
    sendObj(host, port, { battery: true, value });

    console.log('battery value', value);
  })
}

async function mapEventsToVehicleActions(eventEmitter) {
  interfaces.leftMotor = await leftMotor();
  interfaces.rightMotor = await rightMotor();
  interfaces.batteryPin = await batteryPin();

  eventEmitter.on('drive', setDriveSpeed);
  eventEmitter.on('battery', getBatteryLevel);

  console.log("board interfaces ready");
}

module.exports = {
  mapEventsToVehicleActions
};