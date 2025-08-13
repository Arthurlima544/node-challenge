import fastify from 'fastify'
import crypto from 'node:crypto'
import multipart from '@fastify/multipart'
import { db } from './src/database/client.ts'
import { courses } from './src/database/schema.ts'
import { eq } from 'drizzle-orm'

const server = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid, hostname',
            },
        },
    },
})

server.get('/courses', async (request, reply) => {
    const result = await db.select({
        id: courses.id,
        title: courses.title
    }).from(courses)

    return reply.send({ courses: result })
})

server.get('/courses/:id', async (request, reply) => {
    type Params = {
        id: string
    }

    const params = request.params as Params
    const courseId = params.id


    const result = await db
        .select()
        .from(courses)
        .where(eq(courses.id, courseId))

    if (result.length > 0) {
        return { course: result[0] }
    }

    return reply.status(404).send()
})

server.post('/courses', async (request, reply) => {
    type Body = {
        title: string
        description: string | undefined
    }
    const body = request.body as Body
    const courseTitle = body.title
    const courseDescription = body.description

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