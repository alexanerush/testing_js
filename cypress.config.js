import { defineConfig } from 'cypress';
import 'cypress-mochawesome-reporter/register';

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
  },
});
