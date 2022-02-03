const express = require('express');
const io = require('socket.io')(3002, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const path = require('path');
const cors = require('cors');
const app = express();
const controllers = require('./controllers');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

app.get('/profiles', controllers.profiles.get);
app.post('/create',controllers.profiles.post);
app.put('/update',controllers.profiles.put);
app.put('/delete', controllers.profiles.delete)



//WEBSOCKET EXPERIMENTATION
let connections = {};

io.on('connection', socket => {
  socket.emit('connect-verify', 'Websocket Connection Created');

  socket.on('handshake', data => {
    connections[data] = socket.id;
    console.log(connections)
  });
  socket.on('send-chat-message', message => {
    console.log(connections[message.sendTo])
    socket.emit('chat-message', message);
    socket.to(connections[message.sendTo]).emit('chat-message', message);
  })

});

io.on('send-chat-message', message => {

});