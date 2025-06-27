const axios = require('axios');
const BASE_URL = 'http://localhost:3000';
let createdUserId = null;

it('should create a mock user', async () => {
  const response = await axios.post(`${BASE_URL}/users`, {
    userName: `user_${Date.now()}`,
    password: 'Password123!'
  });

  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty('id');
  createdUserId = response.data.id;
});

it('should fetch the created mock user', async () => {
  const response = await axios.get(`${BASE_URL}/users/${createdUserId}`);

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('userName');
});

it('should delete the created mock user', async () => {
    const response = await axios.delete(`${BASE_URL}/users/${createdUserId}`);
    expect(response.status).toBe(200);
  });
  
  it('should return 404 for non-existent user', async () => {
    try {
      await axios.get(`${BASE_URL}/users/999999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });  