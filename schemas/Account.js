const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  avatar: String,
  accountLevel: Number,
  token: String
})

module.exports = mongoose.model('Account', AccountSchema)
