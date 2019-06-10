const express = require('express');
const config = require('./config/config');
const connectToDb = require('./config/db');
const routes = require('./api/routes');
const app = express();

const startServer = () => {
  app.get('/', (req, res) => res.send('Hello World!'))
  app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`)
  );
}

app.use(routes);

connectToDb();
startServer();