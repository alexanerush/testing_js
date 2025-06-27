const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

describe('✅ Successful Response Structure', () => {
  it('should return a user with full valid structure', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);

    const user = response.data;

    expect(response.status).toBe(200);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('address.city');
    expect(user).toHaveProperty('company.name');
    expect(user).toHaveProperty('dob');
    expect(user).toHaveProperty('profile_picture_url');
    expect(user).toHaveProperty('preferences.language');
    expect(user).toHaveProperty('preferences.notifications_enabled');
  });
});
