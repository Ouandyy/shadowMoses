const item = require('./index')

const getAll = () => {
    return item.find({});
};
module.exports = { getAll }