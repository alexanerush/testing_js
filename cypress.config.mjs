import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    baseUrl: 'https://demoqa.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
  },
});
