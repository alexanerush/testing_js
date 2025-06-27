const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
const BASE_URL = 'https://api.example.com/users';

describe('Simulated error responses with axios-mock-adapter', () => {
  it('should simulate 403 Forbidden', async () => {
    mock.onGet(`${BASE_URL}/403`).reply(403, {
      error: "Forbidden",
      details: "You are not allowed to access this resource."
    });

    try {
      await axios.get(`${BASE_URL}/403`);
    } catch (error) {
      expect(error.response.status).toBe(403);
      expect(error.response.data).toHaveProperty('error');
      expect(error.response.data).toHaveProperty('details');
    }
  });

  it('should simulate 502 Bad Gateway', async () => {
    mock.onGet(`${BASE_URL}/502`).reply(502, {
      error: "Bad Gateway",
      details: "Upstream server error."
    });

    try {
      await axios.get(`${BASE_URL}/502`);
    } catch (error) {
      expect(error.response.status).toBe(502);
      expect(error.response.data.error).toBe("Bad Gateway");
    }
  });

  it('should simulate 204 No Content', async () => {
    mock.onGet(`${BASE_URL}/204`).reply(204);

    const response = await axios.get(`${BASE_URL}/204`);
    expect(response.status).toBe(204);
    expect(response.data).toBeUndefined(); 
  });

  it('should simulate 404 Not Found', async () => {
    mock.onGet(`${BASE_URL}/999`).reply(404, {
      error: "Not Found",
      details: "User not found"
    });

    try {
      await axios.get(`${BASE_URL}/999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.details).toBe("User not found");
    }
  });
});

