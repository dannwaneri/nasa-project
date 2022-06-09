const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
};


async function disconnectDB () {
  await mongoose.disconnect();
}

module.exports = {
  connectDB,
  disconnectDB
};