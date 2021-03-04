const express = require('express');
const app = express();
/* const basic = require('./router/index'); */
const cors = require('cors');
/* const request = require('request'); */

const db = require('./db');

app.use(express.json());
app.use(cors());
/* app.use('/', basic); */

app.get('/', (req, res) => {
  // console.log(res);
  res.send({data: 'hello world GET'});
})

app.post('/', (req, res) => {
  res.send({data: req.body});
})

app.post('/Mysql/Query', (req, res) => {
  const query = req.body.query;
  db.query(query, (err, data) =>{
    if(!err){
      res.send({
        result : true,
        data   : data,
        code   : '',
        message: '' 
      });
    }else{ 
      // res.send(err);
      res.send({
        result : false,
        data   : null,
        code   : err.code,
        message: err.sqlMessage 
      });
    }
  })
  // res.send({data: req.body});
})

const port = 3001;
app.listen(port, () => {console.log(`Listening on port ${port}..`)});