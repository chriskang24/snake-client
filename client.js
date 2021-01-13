const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
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

  // console.log(conn);
  return conn;
}

// conn.on('end', () => {
//   console.log("disconnected from server!");
// });

module.exports = connect;
