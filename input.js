let connection; // stores the active TCP connection object

const setupInput = function (conn) {

  connection = conn;

  // console.log(conn);

  stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
    handleUserInput(key);
  })

  stdin.resume();

  return stdin;
}

const handleUserInput = function (key) {

  
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w") {
    connection.write('Move: up');
  }

  if (key === "s") {
    connection.write('Move: down');
  };

  if (key === "a") {
    connection.write('Move: left');
  }

  if (key === "d") {
    connection.write('Move: right');
  }

  if (key === "f") {
    connection.write('Say: I am coming for you!');
  }
}

setupInput();

module.exports = setupInput;