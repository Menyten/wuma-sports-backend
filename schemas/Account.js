const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  avatar: String,
  accountLevel: Number,
})

<<<<<<< HEAD
module.exports = mongoose.model('Account', AccountSchema)
=======
module.exports = mongoose.model('Account', AccountSchema)
>>>>>>> 40a972b2f33cf895cd9c4c3f86fcb0db660d44c9
