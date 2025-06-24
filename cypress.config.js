import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      mochawesome(on);
    },
  },
  baseUrl: 'https://demoqa.com',
});
