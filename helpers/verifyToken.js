const { OAuth2Client } = require('google-auth-library');
const googleConfig = require('../config/google');
const client = new OAuth2Client(googleConfig.CLIENT_ID);

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: googleConfig.CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
}

module.exports = verify;