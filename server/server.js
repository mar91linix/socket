const express = require('express');


 const socketIO = require('socket.io');
 const http = require('http');

 const path = require('path');
const app = express();

 //para sockers
let server = http.createServer(app); //para sockers

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = comunicaicon del backend
 module.exports.io = socketIO(server);
 require('./socket/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});