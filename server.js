/*
    Dependancies
*/

var connect = require('connect'),
    http = require('http'), 
    app;


app = connect().use(connect.static('app'));


var port = process.env.PORT || 8080;

var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(port, function() {
  console.log('Running on port %s', port);
});

io.sockets.on('connection', function (socket) {

    socket.emit('connected', { on: true });
    
    socket.on("view", function (filename) {
        socket.emit('files', { on: true });
    });
});
