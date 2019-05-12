const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const connectToDbAndStartServer = require('./config/db');

const startServer = () => {
  const server = express();
  server.get('/', (req, res) => res.send('Hello World!'))
  server.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`)
  );
}

mongoose.connect(config.URL, { useNewUrlParser: true })

connectToDbAndStartServer(startServer);