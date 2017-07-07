let concatMap = require('concat-map')
module.exports = function (array) {
    return concatMap(array,v=>v)
};
