const express = require('express');
const router = express.Router();
const verify = require('../helpers/verifyToken');

router.post('/api/verifyToken', (req, res) => {
  verify(req.body.token).catch(err => console.log(err));
  res.json({ msg: 'Verified' })
});

module.exports = router;