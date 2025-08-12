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

server.get('/courses/:id', (request, reply) => {

    const courseId = request.params.id

    const course = courses.find(course => course.id === courseId)

    if (course) {
        return { course }
    }

    return reply.status(404).send()
})

server.post('/courses', (request, reply) => {
    const courseTitle = request.body.title
    const courseId = crypto.randomUUID()

    if (!courseTitle) {
        return reply.status(400).send("Title Required")
    }

    courses.push({ id: courseId, title: courseTitle })
    return reply.status(201).send({ courseId })
})

server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})