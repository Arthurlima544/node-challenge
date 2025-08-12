const http = require('node:http')

const server = http.createServer((request, reply) => {
    reply.write('Hello world')
    if (request.url == '/users' && request.method == 'GET') {
        reply.write('List users...')
    } else if (request.url == '/users' && request.method == 'POST') {
        reply.write('Create user...')
    }// and goes on ...

    reply.end()
})

server.listen(3333).on('listening', () => {
    console.log('HTTP server running!')
})