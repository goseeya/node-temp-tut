const http = require('http')

const server = http.createServer((req,res) => {
    console.log('requestevent');
    res.end('hellooo')
})

server.listen(500, () => {
    console.log('server lostening on port 5000...');
})