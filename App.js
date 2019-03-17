const express = require('express');

module.exports = class App {

  constructor() {
    this.startServer();
  }

  startServer() {
    this.server = express();
    this.server.get('/', (req, res) => res.send('Hello World!'))
    this.server.listen(3000, () => console.log('Listening on port 3000')
    );
  }

}
