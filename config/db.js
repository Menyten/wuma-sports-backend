const mongoose = require('mongoose');

const connectToDbAndStartServer = (server) => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to DB')
    server();
  });
}

module.exports = connectToDbAndStartServer;