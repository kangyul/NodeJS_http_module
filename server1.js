const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello Yul</p>');
})
    .listen(8080);
server.on('listening', () => {
    console.log('Server started on port 8080');
});;
server.on('error', (error) => {
    console.error(error);
});