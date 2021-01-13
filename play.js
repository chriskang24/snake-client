const connect = require('./client');

const setupInput = require('./input');

console.log('Connecting ...');

const connection = connect(); 

// console.log(connection);

setupInput(connection);