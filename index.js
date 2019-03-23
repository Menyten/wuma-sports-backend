const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db-config');

const startServer = () => {
  const server = express();
  server.get('/', (req, res) => res.send('Hello World!'))
  server.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`)
  );
}

config.URL;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB')
  startServer();
});