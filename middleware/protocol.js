
const messageListener = events => (msg, rinfo) => {
  try {
    const message = JSON.parse(msg);
    if (message.drive) return events.emit('drive', message);
    console.log('skipped', message);
  } catch (e) {

  }
};

module.exports = {
  messageListener,
};