const express = require('express');
const router = express.Router();
const verify = require('../helpers/verify-token');
const Account = require('../schemas/Account');

router.get('/api/users/', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const payload = await verify(token);
  const user = Account.findOne({ email: payload.email })
    .exec()
    .then(user => {
      if (user !== null) {
        console.log(user);
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
});

module.exports = router;