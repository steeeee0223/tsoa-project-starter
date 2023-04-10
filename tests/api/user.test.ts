import { v4 } from 'uuid'

import { request } from '../app'

describe('Users', () => {
    describe('GET /users/{userId}', () => {
        it('responds with a 200 status', async () => {
            const userId = v4()

            const res = await request.get(`/users/${userId}`)
            expect(res.statusCode).toEqual(200)
            expect(res.body.id).toEqual(userId)
        })
    })

    describe('POST /users', () => {
        it('responds with a 201 status', async () => {
            const body = {
                email: 'johndoe@test.com',
                name: 'John Doe',
                phoneNumbers: [],
            }
            const resBody = {
                ...body,
                id: expect.anything(),
                status: 'Happy',
            }
            const res = await request.post(`/users`).send(body)
            expect(res.statusCode).toEqual(201)
            expect(res.body).toEqual(resBody)
        })
    })
})
