const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  avatar: String,
  accountLevel: Number,
})