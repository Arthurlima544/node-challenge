import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { db } from "../database/client.ts"
import { courses, enrollments } from "../database/schema.ts"
import z from 'zod';
import { asc, ilike, and, SQL, eq, count } from 'drizzle-orm';

const defaultPageSizeLimit = 10

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
                            enrollments: z.number(),
                        })
                    ),
                    total: z.number(),
                }).describe('Courses retrieved with success!')
            },
            querystring: z.object({
                search: z.string().optional().describe('Search a title using Case-insensitive'),
                orderBy: z.enum(['id', 'title']).optional().default('id').describe('Order ascendant by id or title'),
                pageSize: z.coerce.number().optional().describe('How many results per page'),
                page: z.coerce.number().min(1).optional().default(1).describe('The page number to retrieve, starting from 1.'),
            })
        }
    }, async (request, reply) => {

        const { search, orderBy, page, pageSize } = request.query

        const conditions: SQL[] = []
        if (search) {
            conditions.push(ilike(courses.title, `%${search}%`))
        }

        const [result, total] = await Promise.all(
            [
                db.select({
                    id: courses.id,
                    title: courses.title,
                    enrollments: count(enrollments.id),
                })
                    .from(courses)
                    .leftJoin(enrollments, eq(enrollments.courseId, courses.id))
                    .where(and(...conditions))
                    .orderBy(asc(courses[orderBy]))
                    .offset((page - 1) * (pageSize ? pageSize : defaultPageSizeLimit))
                    .groupBy(courses.id)
                    .limit(pageSize ? pageSize : defaultPageSizeLimit),
                db.$count(courses, and(...conditions))
            ]
        )

        return reply.send({ courses: result, total })
    })
}