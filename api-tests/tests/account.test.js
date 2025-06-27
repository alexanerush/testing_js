const request = require('supertest');

const BASE_URL = 'https://demoqa.com';

describe('POST /Account/v1/User', () => {
  it('should create a user with valid data', async () => {
    const response = await request(BASE_URL)
      .post('/Account/v1/User')
      .send({
        userName: `user_${Date.now()}`,
        password: 'Password123!'
      });

    expect(response.status).toBe(201); 
    expect(response.body).toHaveProperty('userID');
    expect(response.body).toHaveProperty('username');
  });
});
