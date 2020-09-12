const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require('body-parser');
const multer = require('multer');
const uploadImage = require('./helpers/helpers');
const path = require('path');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/joinroom', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/infopage', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/room/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        // 10 MB Limit
        fileSize: 10 * 1024 * 1024,
    },
})

app.disable('x-powered-by');
app.use(multerMid.single('file'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/uploads', async (req, res, next) => {
    try {
        const myFile = req.file;
        const imageUrl = await uploadImage(myFile);
        res
            .status(200)
            .header({"Access-Control-Allow-Origin":"*"})
            .json({
                message: "Upload was successful",
                data: imageUrl
            })
    } catch (error) {
        next(error)
    }
});

io.on("connection", (socket) => {
    socket.on("textMessage", (message) => {
        socket.to(socket.rooms[message.room]).emit('textMessage', message.text);
    });
    socket.on("imgMessage", (message) => {
        socket.to(socket.rooms[message.room]).emit('imgMessage', message.img);
    })

    socket.on('join room', (room) => {
        socket.join(room);
    });
    socket.on('leave room', (room) => {
        socket.leave(room);
    })
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
        message: 'Internal server error!',
    })
    next()
});

server.listen(port, () => console.log(`Listening on port ${port}`));
