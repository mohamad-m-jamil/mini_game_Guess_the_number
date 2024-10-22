const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

let players = [];

io.on('connection', (socket) => {
    console.log('A user connected');
    players.push(socket.id);

    socket.emit('welcome', { message: 'Welcome to the game!', players });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        players = players.filter(player => player !== socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
