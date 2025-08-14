import fastify from 'fastify'
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { createCoursesRoute } from './src/routes/create-course.ts'
import { getCoursesByIdRoute } from './src/routes/get-course-by-id.ts'
import { getCoursesRoute } from './src/routes/get-courses.ts'
import scalarAPIReference from '@scalar/fastify-api-reference'
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
}).withTypeProvider<ZodTypeProvider>()

if (process.env.NODE_ENV === 'development') {
    server.register(fastifySwagger, {
        openapi: {
            info: {
                title: 'Challenge Node.js',
                version: '1.0.0',
            }
        },
        transform: jsonSchemaTransform,
    })

    server.register(scalarAPIReference, {
        routePrefix: '/docs',
        configuration: {
            theme: 'bluePlanet',
        },
    })
}

server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)

// Routes
server.register(createCoursesRoute)
server.register(getCoursesByIdRoute)
server.register(getCoursesRoute)

server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})