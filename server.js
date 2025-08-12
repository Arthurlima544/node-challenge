const fastify = require('fastify')
const crypto = require('crypto')
const multipart = require('@fastify/multipart')

const server = fastify()
server.register(multipart)

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

server.patch('/avatar', async (request, reply) => {
    const data = await request.file()

    if (!data) {
        return reply.status(400).send("Image Required")
    }

    const buffer = await data.toBuffer();
    const base64Image = buffer.toString('base64');
    const mimeType = data.mimetype

    reply.header('Content-Type', 'text/html');

    return reply.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Avatar Preview</title>
            <style>
                body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                img { border-radius: 50%; max-width: 250px; }
            </style>
        </head>
        <body>
            <img src="data:${mimeType};base64,${base64Image}" alt="User Avatar">
        </body>
        </html>
    `);
})

server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})