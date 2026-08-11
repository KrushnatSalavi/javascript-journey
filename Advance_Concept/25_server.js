const http = require('http')

const server = http.createServer((res,req) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});

})

server.listen(5000,() =>{
    console.log('server running at http://localhost:500/');
    
})