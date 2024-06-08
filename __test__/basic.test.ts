import request from 'supertest';
import { app } from '../src';

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
