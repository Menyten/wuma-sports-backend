const { OAuth2Client } = require('google-auth-library');
const googleConfig = require('../config/google');
const client = new OAuth2Client(googleConfig.CLIENT_ID);
const Account = require('../schemas/Account');

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: googleConfig.CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const newUser = new Account({
    email: payload.email,
    name: payload.name,
    avatar: payload.picture,
  })
  Account.findOne({ email: newUser.email }, (err, user) => {
    if (user) {
      console.log('User already exists')
    } else {
      newUser.save((err, user) => {
        console.log(user.name, 'has been saved!');
      });
    }
  });
}

module.exports = verify;