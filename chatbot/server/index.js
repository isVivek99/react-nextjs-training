const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const trainAI = require('../server/services/chatbot.service');
const app = express();
const server = http.createServer(app);
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

//train the AI
trainAI.trainChatBotIA();

io.on('connection', (socket) => {
  socket.on('send_message', async (data) => {
    let response = await trainAI.generateResponseAI(data.message);
    response.answer !== undefined
      ? response.answer
      : "I am sorry, I don't understand :( ";
    socket.emit('received_message', response);
  });
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
