import { beforeAll, describe, expect, it, test, vi } from 'vitest'
import { db } from '../database/client.ts'
import { FastifyInstance } from 'fastify'
import { beforeEach } from 'node:test'
import { loginRoute } from './login.ts'
import { server } from '../app.ts'

vi.mock('../database/client.ts')

describe('POST /sessions', () => {

    beforeEach(async () => {
        vi.clearAllMocks()

    })

    it('should fail when didn\'t found any email', async () => {
        vi.spyOn(db, 'select').mockReturnValue({
            from: vi.fn().mockReturnThis(),
            where: vi.fn().mockResolvedValue([]),
        } as any)
        const res = await server.inject({
            method: 'POST',
            url: '/sessions',
            payload: {
                email: 'notfound@gmail.com',
                password: 'notfoundpassword'
            }
        })
        expect(res.statusCode).toBe(400)
        expect(res.json()).toEqual({ message: 'Invalid Credentials' })
    })
})
