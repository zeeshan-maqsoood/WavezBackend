const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  // Send a message to the client
  socket.emit('message', 'Hello, world!');

  // Listen for messages from the client
  socket.on('img', (data) => {
    console.log(data);
  });
});
const port=3003
http.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log("hello")
});


