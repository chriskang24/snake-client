const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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
