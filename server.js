//require the libraries
const http     = require('http');
const express  = require('express');
const socketIo = require('socket.io');

//instantiate the app as an instance of express
const app      = express();

//allows express app to serve the public directory
app.use(express.static('public'));

//ROUTES

//set the root view as the index.html
app.get('/', function (request, response){
  response.sendFile(_dirname + '/public/index.html');
});

//SERVER

//set the port if not evironmental port exists
var port = process.env.PORT || 3000;

//initialize the server - pass the express app to the http module and have it listen to the port
var server = http.createServer(app)
                 .listen(port, function(){
                    console.log('Listening on port '+ port +'.');
                  });

//initiate socket io using the server instance
const io       = socketIo(server);

//setup event listener for connections to the server
io.on('connection', function(socket){
  console.log('A user has connected.');
});

//export the server so we can use it later
module.exports = server;



