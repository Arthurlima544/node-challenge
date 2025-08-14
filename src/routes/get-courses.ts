import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from 'zod';

export const getCoursesRoute: FastifyPluginAsyncZod = async function (server) {
    server.get('/courses', {
        schema: {
            tags: ['courses'],
            summary: 'Get all courses',
            description: 'This route show all courses in database.',
            response: {
                200: z.object({
                    courses: z.array(
                        z.object({
                            id: z.uuid(),
                            title: z.string(),
                        })
                    )
                }).describe('Courses retrived with success!')
            }
        }
    }, async (request, reply) => {
        const result = await db.select({
            id: courses.id,
            title: courses.title
        }).from(courses)

        return reply.send({ courses: result })
    })
}