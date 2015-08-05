//initiate socket using const io from server
var socket = io();

//gets the HTML element connection-count
var connectionCount = document.getElementById('connection-count');

//sets up listener for the usersConnected emission from server
socket.on('usersConnected', function(count){
  connectionCount.innerText = 'Connected Users: ' + count;
});

//sets up listener for the statusMessage single socket emission from server
