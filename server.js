const fastify = require('fastify')
const crypto = require('crypto')

const server = fastify()

const courses = [
    { id: 1, title: 'Node.js Course' },
    { id: 2, title: 'React Course' },
    { id: 3, title: 'Flutter Course' },
]
server.get('/courses', () => {
    return { courses }
})

server.post('/courses', (_, reply) => {
    const courseId = crypto.randomUUID()
    courses.push({ id: courseId, title: 'New Course' })
    return reply.status(201).send({ courseId })
})

server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})