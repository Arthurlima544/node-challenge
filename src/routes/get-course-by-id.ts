import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from "zod"
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { eq } from 'drizzle-orm'
import { checkRequestJWT } from "./hooks/check-request-jwt.ts";
import { getAuthenticatedUserFromRequest } from "../utils/get-authenticated-user-from-request.ts";


export const getCoursesByIdRoute: FastifyPluginAsyncZod = async function (server) {

    server.get('/courses/:id',
        {
            preHandler: [
                checkRequestJWT,
            ],
            schema: {
                tags: ['courses'],
                summary: 'Get course by Id',
                description: 'This route retrieves a course based on id (required).',
                response: {
                    200: z.object({
                        course:
                            z.object({
                                id: z.uuid(),
                                title: z.string(),
                                description: z.string().nullable()
                            })
                    }).describe('Course retrieved with success!'),
                    404: z.null().describe('Not Found'),
                },
                params: z.object({
                    id: z.uuid(),
                }),
            }
        },
        async (request, reply) => {
            const user = getAuthenticatedUserFromRequest(request)

            const courseId = request.params.id

            const result = await db
                .select()
                .from(courses)
                .where(eq(courses.id, courseId))

            if (result.length > 0) {
                return { course: result[0] }
            }

            return reply.status(404).send()
        })
}