const express = require('express');
const router = express.Router();
const verify = require('../helpers/verifyToken');

router.get('/api/user', (req, res) => {
  console.log(req.headers);
  res.json({ msg: 'Something' });
});

router.post('/api/verifyToken', (req, res) => {
  verify(req.body.token).catch(err => console.log(err));
  res.json({ msg: 'Verified' });
});

module.exports = router;