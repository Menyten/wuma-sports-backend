const mongoose = require('mongoose');

module.exports = {
  DB_NAME: 'wuma-sports',
  URL: mongoose.connect(`mongodb://localhost/${this.DB_NAME}`, { useNewUrlParser: true }),
  PORT: 3000,
}