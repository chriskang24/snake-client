const connect = require('./client');

const setupInput = function() {
  stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  return stdin;
}

const handleUserInput = function() {
  stdin = process.stdin;

  stdin.on('data', (key) => {

    if (key === '\u0003') {
      process.exit();
    }
  })
}

console.log('Connecting ...');

setupInput();
handleUserInput();
connect(); 