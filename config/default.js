module.exports = {
  port: 4001,

  pins: {
    BATTERY_PIN: 'A7',
    MOTOR_LEFT: {
      pins: {
        pwm: 3,
        dir: 4,
        cdir: 2
      }
    },
    MOTOR_RIGHT: {
      pins: {
        pwm: 6,
        dir: 7,
        cdir: 5
      }
    },
  }
};