import { test, expect } from 'vitest'
import supertest from 'supertest'
import { server } from '../app.ts'
import { faker } from '@faker-js/faker/locale/pt_BR'
import { randomUUID } from 'crypto'


test('create a course with success', async () => {
    await server.ready()

    const title = randomUUID()

    const response = await supertest(server.server)
        .post('/courses')
        .set('Content-Type', 'application/json')
        .send({ title: title })

    console.log(response.body)

    expect(response.status).toEqual(201)
    expect(response.body).toEqual({
        courseId: expect.any(String)
    })
})