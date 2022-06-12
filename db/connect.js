const mongoose = require('mongoose');

async function connectDB (url) {
  await mongoose.connect(url);
};


async function disconnectDB () {
  await mongoose.disconnect();
}

module.exports = {
  connectDB,
  disconnectDB
};