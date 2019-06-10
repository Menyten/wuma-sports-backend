const express = require('express');
const router = express.Router();

router.post('/api/verifyToken', (req, res) => {
  res.send('Another head hangs lowly!!!!')
});

module.exports = router;