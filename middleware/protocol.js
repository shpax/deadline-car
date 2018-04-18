
const messageListener = events => (msg, rinfo) => {
  try {
    const message = JSON.parse(msg);
    if (message.drive) return events.emit('drive', message);
    if (message.battery) return events.emit('battery', rinfo.address);
    console.log('skipped', message);
  } catch (e) {
    console.log("json parse error", e);
  }
};

module.exports = {
  messageListener,
};