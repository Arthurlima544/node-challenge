import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client"
import { courses } from "../database/schema"
import z from "zod"
import { eq } from 'drizzle-orm'


export const getCoursesByIdRoute: FastifyPluginAsyncZod = async (server) => {

    server.get('/courses/:id',
        {
            schema: {
                params: z.object({
                    id: z.uuid(),
                }),
            }
        },
        async (request, reply) => {
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


}