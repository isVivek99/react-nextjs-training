const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);
  socket.on('send_message', (data) => {
    socket.broadcast.emit('received_message', data);
  });
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
