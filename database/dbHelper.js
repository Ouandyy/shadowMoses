const item = require('./index')

const getAll = () => {
    return item.find({});
};

const getTshirt = () => {
    return item.find({ type: 'tshirt' })
}

const getSweater = () => {
    return item.find({ type: 'sweater' })
}
module.exports = { getAll, getTshirt, getSweater }