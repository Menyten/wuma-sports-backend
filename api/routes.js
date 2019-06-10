const express = require('express');
const router = express.Router();

router.post('/api/verifyToken', (req, res) => {
  res.json({ msg: 'wololololo' })
});

module.exports = router;