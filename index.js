const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/style.css");
});

app.get('/script.js', function(req, res) {
    res.sendFile(__dirname + "/script.js");
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});