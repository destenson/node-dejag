# About

[![Greenkeeper badge](https://badges.greenkeeper.io/destenson/node-dejag.svg)](https://greenkeeper.io/)

A simple module containing a single function that takes a jagged array, and returns a flat one.

## Example

```javascript
let dejag=require('dejag');

let jaggedArray = [1, 2, [3, 4, 5], 6, 7, 8, [9, 10]];
let dejagdArray = dejag(jaggedArray);
console.log(dejagdArray);
```

***

```
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

## License

MIT
