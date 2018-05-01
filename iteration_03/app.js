const http = require('http');
// Server is an EventEmitter (server.on(...))
const server = http.createServer();


server.listen(8080);
console.log('Listening on port 8080...');


server.on('connection', (socket) => {
    console.log('New connection...');

});

