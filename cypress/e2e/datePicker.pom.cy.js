import { datePickerPage } from '../support/pages/DatePickerPage';

describe('Date Picker Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    datePickerPage.visit();
  });

  it('selects a specific date and checks the result', () => {
    const targetDate = '06/30/2025';

    datePickerPage.selectDate(targetDate);
    datePickerPage.checkSelectedDate(targetDate);
  });
});
