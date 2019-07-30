const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/shadowmoses', { useNewUrlParser: true })
    .then( () => {console.log('Connection success')} )
    .catch( (err) => {console.error('error in connection', err)})


const itemSchema = mongoose.Schema({
    type: String,
    name: String,
    color: String,
    preview1: String,
    preview2: String,
    img1: String,
    img2: String,
    price: String
});

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;