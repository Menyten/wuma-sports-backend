const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const db = require('./db');

const startServer = () => {
  const server = express();
  server.get('/', (req, res) => res.send('Hello World!'))
  server.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`)
  );
}

mongoose.connect(config.URL, { useNewUrlParser: true })

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB')
  startServer();
});