import { datePickerPage } from '../support/pages/DatePickerPage';

describe('Date Picker Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    datePickerPage.visit();
  });

  it('selects a specific date and checks it', () => {
    const targetDate = '06/25/2025'; 
    datePickerPage.selectDate(targetDate);
    datePickerPage.checkSelectedDate(targetDate);
  });
});
