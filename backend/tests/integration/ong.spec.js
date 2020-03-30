const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

/* eslint-disable no-undef */
describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })
  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'Test',
      email: 'test@test.com.jp',
      whatsapp: '00000000000',
      city: 'Okazaki',
      uf: 'JP',
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
