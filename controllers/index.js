const { leftMotor, rightMotor } = require('../models/vehicle');

function setDriveSpeed(command) {
  const { lf = true, ls = 0, rf = true, rs = 0} = command;

  console.log('speed change', command);

  leftMotor[lf ? 'forward' : 'reverse'](ls);
  rightMotor[rf ? 'forward' : 'reverse'](rs);
}

function mapEventsToVehicleActions(eventEmitter) {
  eventEmitter.on('drive', setDriveSpeed);
}

module.exports = {
  mapEventsToVehicleActions
};