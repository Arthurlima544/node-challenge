import { test, expect } from 'vitest'
import supertest from 'supertest'
import { server } from '../app.ts'
import { makeCourse } from '../tests/factories/make-course.ts'
import { makeAuthenticatedUser } from '../tests/factories/make-authenticated-user.ts'


test('get course by id', async () => {
    await server.ready()

    const { user, token } = await makeAuthenticatedUser('student')
    const course = await makeCourse()

    const response = await supertest(server.server)
        .get(`/courses/${course.id}`)
        .set('Authorization', token)


    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
        course: {
            id: expect.any(String),
            title: expect.any(String),
            description: null
        }
    })
})

test('return 404 for non existing course by valid uuid', async () => {
    await server.ready()
    const { user, token } = await makeAuthenticatedUser('student')

    const response = await supertest(server.server)
        .get(`/courses/6e3b2494-84c2-44bd-a154-9eda02697230`)
        .set('Authorization', token)


    expect(response.status).toEqual(404)
})