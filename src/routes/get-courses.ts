import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from 'zod';
import { asc, ilike } from 'drizzle-orm';

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
                }).describe('Courses retrieved with success!')
            },
            querystring: z.object({
                search: z.string().optional().describe('Search a title using Case-insensitive'),
                orderBy: z.enum(['id', 'title']).optional().default('id').describe('Order ascendant by id or title'),
                page: z.coerce.number().optional().default(1)
            })
        }
    }, async (request, reply) => {

        const { search, orderBy, page } = request.query

        const result = await db.select({
            id: courses.id,
            title: courses.title
        })
            .from(courses)
            .where(
                search ? ilike(courses.title, `%${search}%`) : undefined
            )
            .orderBy(asc(courses[orderBy]))
            .offset((page - 1) * 2)
            .limit(2);

        return reply.send({ courses: result })
    })
}