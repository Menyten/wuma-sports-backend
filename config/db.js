const mongoose = require('mongoose');
const config = require('./config');

const connectToDb = () => {
  mongoose.connect(config.URL, { useNewUrlParser: true })
  const db = mongoose.connection;
  db.on('error', error => {
    console.log(error)
  });
  db.once('open', () => {
    console.log('Connected to DB')
  });
}

module.exports = connectToDb;