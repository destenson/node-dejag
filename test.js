let dejag = require('./index');

let jaggedArray = [ 1, 2, [3, 4, 5], 6, 7, 8];
let dejagdArray = dejag(jaggedArray);
console.log(dejagdArray);
