const http = require('http');

function startServer(port) {
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.end("Welcome to the Home page");
        }else if (req.url === '/about') {
            res.end("Welcome to the About page");
        }else if (req.url === '/contact') {
            res.end("Welcome to the contact page");
        }else {
            res.end("404 page not found");
        }
    });

    server.listen(port, ()=>{
        console.log("server running");
    });
}

module.exports = {startServer};