const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        clearInterval(interval);
    });
    socket.on("textMessage", (message) => {
        socket.to(socket.rooms[message.room]).emit('textMessage', message.text);
    })
    socket.on('join room', (room) => {
        socket.join(room);
    });
    socket.on('leave room', (room) => {
        socket.leave(room);
    })
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
