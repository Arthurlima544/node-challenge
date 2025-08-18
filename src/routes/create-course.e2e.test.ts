import { test, expect } from 'vitest'
import supertest from 'supertest'
import { server } from '../app.ts'
import { randomUUID } from 'crypto'
import { makeAuthenticatedUser } from '../tests/factories/make-authenticated-user.ts'


test('create a course with success', async () => {
    await server.ready()

    const { token } = await makeAuthenticatedUser('manager')

    const title = randomUUID()

    const response = await supertest(server.server)
        .post('/courses')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send({ title: title })

    expect(response.status).toEqual(201)
    expect(response.body).toEqual({
        courseId: expect.any(String)
    })
})