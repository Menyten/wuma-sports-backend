const express = require('express');
const config = require('./config/config');
const connectToDb = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const cors = require('cors');
const app = express();

const startServer = () => {
  app.get('/', (req, res) => res.send('Hello World!'))
  app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`)
  );
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

connectToDb();
startServer();