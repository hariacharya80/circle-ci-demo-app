import request from 'supertest';
import { app } from '..';

describe('Basic Test', () => {
  test('Test Index Route', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      name: 'Hari Acharya',
      age: 22,
      email: 'hariacharyanepal7@gmail.com'
    })
  })
})

describe('Book Route', () => {
  it('Must get book list', async () => {
    const res = await request(app).get('/books');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject([])
  })
  it('Must add a book', async () => {
    const res = await request(app).post('/book').send({
      name: 'Sample Book',
      author: 'Hari Acharya'
    })
    expect(res.status).toBe(201)
    expect(res.body.data).toMatchObject({
      id: expect.any(String),
      author: 'Hari Acharya',
      name: 'Sample Book'
    })
  })
})

describe('Test redis cache', () => {
  it('Must set and get redis cache', async () => {
    const res = await request(app).post('/redis-cache').send({
      cacheKey: 'Name',
      cacheValue: 'Hari'
    });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      key: 'Name',
      value: 'Hari_from_redis'
    })
  })

})
