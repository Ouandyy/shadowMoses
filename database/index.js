const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/shadowmoses', { useNewUrlParser: true })
    .then( () => {console.log('Connection success')} )
    .catch( (err) => {console.error('error in connection', err)})


const itemSchema = mongoose.Schema({
    type: {type: String},
    name: {type: String},
    color: {type: String},
    img1: {type: String},
    img2: {type: String}
});

const Item = mongoose.model('Item', itemSchema)

module.exports = Item;