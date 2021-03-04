const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // console.log(res);
  res.send({data: 'hello world GET'});
})

router.post('/', (req, res) => {
  console.log(res);
  res.send({data: 'hello world POST'});
})

module.exports = router;