const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));
io.on("connection", onConnection);
http.listen(port, () => console.log("Listening on port " + port));

function onConnection(socket) {
    console.log("The user connected.")
}