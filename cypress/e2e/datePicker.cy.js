describe('Date Picker Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    DatePickerPage.visit();
  });

  it('selects a specific date and checks the result', () => {
    const targetDate = '06/30/2025';

    DatePickerPage.selectDate(targetDate);
    DatePickerPage.checkSelectedDate(targetDate);
  });
});
