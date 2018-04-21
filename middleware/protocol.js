
const messageListener = events => (msg, { address, port }) => {
  try {
    const message = JSON.parse(msg);
    if (message.drive) return events.emit('drive', message);
    if (message.battery) return events.emit('battery', address, port);
    console.log('skipped', message);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  messageListener,
};