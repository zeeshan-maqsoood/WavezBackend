// Import required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create an Express app
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a Socket.IO server by passing the HTTP server instance
const io = socketIO(server);

// Event handler for a new socket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Event handler for receiving messages from the client
  socket.on('chat message', (message) => {
    console.log('Received message:', message);

    // Broadcast the received message to all connected clients
    io.emit('chat message', message);
  });

  // Event handler for disconnecting sockets
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.get('/api/data', (req, res) => {
  // Handle the GET request and send a response
  const responseData = { message: 'This is the response to the GET request' };
  res.json(responseData);
});
// Start the server and listen on a port
const port = process.env.PORT || 3003;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
