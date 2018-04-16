const config = require('config');
const five = require('johnny-five');

const context = {
  board: null,
  leftMotor: null,
  rightMotor: null,
  batteryPin: null,
};

async function board(port) {
  if (!context.board) {
    context.board = new five.Board({ port });
    await new Promise(r => context.board.on('ready', r));
  }

  return context.board;
}

async function leftMotor() {
  if (!context.leftMotor) {
    await board();
    context.leftMotor = new five.Motor(config.pins.MOTOR_LEFT);
  }

  return context.leftMotor;
}

async function rightMotor() {
  if (!context.rightMotor) {
    await board();
    context.rightMotor = new five.Motor(config.pins.MOTOR_RIGHT);
  }

  return context.rightMotor;
}

async function batteryPin() {
  if (!context.batteryPin) {
    await board();
    context.batteryPin = new five.Pin(config.pins.BATTERY_PIN);
  }

  return context.batteryPin;
}

module.exports = {
  board,
  leftMotor,
  rightMotor,
  batteryPin
};