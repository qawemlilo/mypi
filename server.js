/*
    Dependancies
*/

var connect = require('connect'),
    http = require('http'), 
    app;


app = connect().use(connect.static('app'));


var port = process.env.PORT || 8080;

http.createServer(app).listen(port, function() {
  console.log('Running on port %s', port);
});