const express = require('express');
const config = require('./config/config');
const connectToDb = require('./config/db');

const startServer = () => {
  const server = express();
  server.get('/', (req, res) => res.send('Hello World!'))
  server.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`)
  );
}

connectToDb();
startServer();