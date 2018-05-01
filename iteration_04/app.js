const http = require('http');


// const server = http.createServer((req, res) => { ALTERNATIVE
const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hi');
        res.end();
    }

    if (req.url === '/bye') {
        res.write(JSON.stringify(['bye', 'bro']));
        res.end();
    }
});

server.listen(8080);


// For real NodeJS Rest-APIs look at Express.js