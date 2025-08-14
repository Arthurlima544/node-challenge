import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from "zod"


export const createCoursesRoute: FastifyPluginAsyncZod = async (server) => {

    server.post('/courses', {
        schema: {
            tags: ['courses'],
            summary: 'Create a course',
            description: 'This route takes an title(required) and description(optional) and creates a course in database.',
            body: z.object({
                title: z.string().min(5, 'Title must have 5 characters'),
                description: z.string().optional()
            }),
            response: {
                201: z.object({ courseId: z.uuid() }).describe('Course created with success!')
            }
        },
    }, async (request, reply) => {
        const title = request.body.title
        const description = request.body.description

        const result = await db
            .insert(courses)
            .values({ title: title, description: description })
            .returning()

        return reply.status(201).send({ courseId: result[0].id })
    })

}