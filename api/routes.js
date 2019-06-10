const express = require('express');
const router = express.Router();

router.post('/api/verifyToken', (req, res) => {
  res.send('Another head hangs lowly!!!!')
});

router.get('/api/message', (req, res) => {
  res.send('Kebab till middag!!')
});
module.exports = router;