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

    const result = await db
        .insert(courses)
        .values({ title: courseTitle, description: courseDescription })
        .returning()

    return reply.status(201).send({ courseId: result[0].id })
})

server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})