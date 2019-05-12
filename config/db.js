const mongoose = require('mongoose');
const config = require('./config/config');

const connectToDbAndStartServer = (server) => {
  mongoose.connect(config.URL, { useNewUrlParser: true })
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to DB')
    server();
  });
}

module.exports = connectToDbAndStartServer;