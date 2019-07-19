const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/dbHelper')
const port = 5000;

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(morgan('dev'));





app.get('/data/info/inventory', (req, res) => {
  db.getAll()
  .then( (data) => {
    res.status(200).send(data)
    
  })
  .catch( (err) => {
    res.status( (err) => {
      console.error('err at get', err)
    })
  })
})

app.use(express.static(path.join(__dirname, '../client/dist/')));


app.listen(port, () => {console.log(`Listening to port ${port}`)})
