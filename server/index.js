const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/dbHelper')
const port = 5000;

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(morgan('dev'));





app.get('/data/info/inventory/all', (req, res) => {
  db.getAll()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status((err) => {
        console.error('err at get', err)
      })
    })
});

app.get('/data/info/inventory/tshirt', (req, res) => {
  db.getTshirt()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status((err) => {
        console.error('err at get tshirt', err)
      })
    })
});

app.get('/data/info/inventory/sweater', (req, res) => {
  db.getSweater()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status((err) => {
        console.error('err at get sweater', err)
      })
    })
});



app.use(express.static(path.join(__dirname, '../client/dist/')));


app.listen(port, () => { console.log(`Listening to port ${port}`) })
