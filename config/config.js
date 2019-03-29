const mongoose = require('mongoose');

config = {
  DB_NAME: 'wuma-sports',
  URL: `mongodb://localhost/${this.DB_NAME}`,
  PORT: 3000,
}

module.exports = config;