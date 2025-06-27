# Cypress + API Automation Testing for demoqa.com

This project includes both UI and API automation for [demoqa.com](https://demoqa.com), structured with scalability, reporting, and CI in mind.

---

##  UI Automation

### Technologies Used
- Cypress
- Cypress Mochawesome Reporter
- ESLint
- Husky
- GitHub Actions (CI)
- Node.js v20


---

### Features
- UI tests for:
  - Alerts
  - Text Box
  - Practice Form
  - Tool Tips
  - Select Menu
- Page Object Model (POM)
- Cross-browser testing (Chrome, Firefox)
- Screenshot capture on failure
- Responsive testing (multiple resolutions)
- HTML/JSON reports with Mochawesome
- Pre-commit checks (Husky + ESLint)

---


### Project Structure

github/
└── workflows/
└── cypress.yml # CI config
└── lint.yml 

.husky/ # Pre-commit hooks

api-tests/
├── mock/
│ ├── db.json # Mock data
│ └── routes.json # Custom mock routes
├── tests/
│ ├── account.axios.test.js
│ ├── responseStructure.test.js
│ └── mockErrors.test.js
└── jest.config.js # Jest configuration

cypress/
├── e2e/ # UI test files
│ ├── alerts.cy.js
│ ├── form.cy.js
│ ├── ...
├── fixtures/
│ └── example.json # Static test data
├── support/
│ ├── commands.js # Custom Cypress commands
│ ├── e2e.js # Cypress global config
│ └── pages/ # Page Object Model

src/
└── index.js 

utils/
├── test/ 
│ ├── arrayUtils.test.js
│ ├── mathUtils.test.js
│ ├── ...
├── arrayUtils.js
├── mathUtils.js
├── stringUtils.js
├── usersListUtils.js
└── ... # Utility functions for testing

.eslintignore
.eslintc.json
.gitignore
.lintstagedignore
.lintstagedrc.json
babel.config.cjs
cypress.config.mjs
package.json
package-lock.json
README.md

---


### Installation & Test Execution

git clone https://github.com/alexanerush/testing_js.git
cd testing_js
npm install


---


## Run tests:
In headless mode:

npx cypress run

In the interactive Test Runner:

npx cypress open

---


## API Automation

Technologies Used:

- Jest
- Axios
- Axios Mock Adapter
- json-server
- Supertest (optional)


---

## Test Scenarios

Task 1 — API Testing (demoqa.com endpoints):

- POST /Account/v1/User – create user (mocked)
- GET /Account/v1/User/{UUID} – retrieve user info
- DELETE /Account/v1/User/{UUID} – delete user
- POST /Account/v1/GenerateToken – generate token (mocked)

Negative scenarios:

- Empty password
- Invalid user ID

Task 2 — Mocked API Response Testing:

- Successful 200 OK response: validate full response structure (id, name, email, ...)
- Error simulations (using axios-mock-adapter):

204 No Content

403 Forbidden

404 Not Found

502 Bad Gateway


---

## Running API Tests

npm install
npm test


---


## Start Mock Server

npm run mock

The server will run at:
http://localhost:3000


---

## Clean Repository

Make sure the following files and folders are excluded via .gitignore and not pushed to the repository:

node_modules/
coverage/
dist/
reports/
cypress/screenshots/
cypress/videos/
*.log
.env


---

## Additional Notes

- All tests are isolated and follow good assertion practices and error handling.
- GitHub Actions is set up for CI.
- ESLint and Husky enforce code quality before commits.