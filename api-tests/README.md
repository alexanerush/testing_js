# API Automation Testing Project

##  Description

This project contains automated API tests for the [https://demoqa.com/swagger](https://demoqa.com/swagger) endpoints,  
as well as mocked test scenarios simulating successful and error responses using tools like `axios-mock-adapter` and `json-server`.

---

##  Technologies Used

- Jest
- Axios
- Axios Mock Adapter
- json-server
- Supertest (optional)

---

##  Installation

npm install




## Running Tests

npm test

## Starting Mock Server

npm run mock

The mock server will be available at:
http://localhost:3000

##  Implemented Test Scenarios
Task 1 — API Testing (demoqa.com)
POST /Account/v1/User: Create a new user (mocked)

GET /Account/v1/User/{UUID}: Retrieve user info

DELETE /Account/v1/User/{UUID}: Delete user

POST /Account/v1/GenerateToken: Token generation (mocked)

Negative scenarios:

Empty password

Invalid user ID

Note: Real API may be unstable or unavailable. Testing is performed using mocks.

Task 2 — Mocked API Response Testing
Successful Response Structure (200 OK)
Validates all expected fields:

id, name, email, address, company, preferences, etc.

Error Simulations
Using axios-mock-adapter, the following HTTP responses are simulated and tested:

204 No Content

403 Forbidden

404 Not Found

502 Bad Gateway

 ## Project Structure

 api-tests/
├── mock/
│   ├── db.json              # Mock user data
├── tests/
│   ├── account.axios.test.js
│   ├── responseStructure.test.js
│   └── mockErrors.test.js
├── .gitignore
├── package.json
└── README.md

## Notes

node_modules, reports, and other temporary files are excluded via .gitignore

All tests are isolated and follow proper assertions and error handling




