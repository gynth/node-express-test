const express = require('express');
const app = express();
/* const basic = require('./router/index'); */
const cors = require('cors');
const request = require('request');

app.use(express.json());
app.use(cors());
/* app.use('/', basic); */

app.get('/', (req, res) => {
  // console.log(res);
  res.send({data: 'hello world GET'});
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({data: 'hello world POST'});
})

const port = 3001;
app.listen(port, () => {console.log(`Listening on port ${port}..`)});