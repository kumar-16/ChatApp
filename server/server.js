const express = require('express');
const socketIO = require('socket.io');

const http = require('http');
const path = require('path');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Connected new user');

    socket.emit('newMessage', {
        from: "John",
        text: "Hey. This is John",
        createdAt: 123123
    });

    socket.on('createMessage', (message) => {
       console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is up on  ${port}`);
});