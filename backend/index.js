const http = require('http');

const app = require('./app');
const PORT = process.env.PORT || 8080;
let server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server Listening on Port: ${PORT}`);
});