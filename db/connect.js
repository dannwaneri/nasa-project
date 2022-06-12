const mongoose = require('mongoose');

async function connectDB (url) {
  return mongoose.connect(url);
};


async function disconnectDB () {
  return mongoose.disconnect();
}

module.exports = {
  connectDB,
  disconnectDB
};