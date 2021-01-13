const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // conn.on('connection', () => {
  //   console.log("Successfully connected to game server");
  // })

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CJK")
    // conn.write("Move: up")
  })

  return conn;
}

// conn.on('end', () => {
//   console.log("disconnected from server!");
// });

module.exports = connect;