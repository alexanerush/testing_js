class DatePickerPage {
  visit() {
    cy.visit('https://demoqa.com/date-picker');
  }

  selectDate(date) {
    cy.get('#datePickerMonthYearInput').then(($input) => {
      cy.wrap($input).clear();
      cy.wrap($input).type(`${date}{enter}`);
    });
  }

  checkSelectedDate(expectedDate) {
    cy.get('#datePickerMonthYearInput').should('have.value', expectedDate);
  }
}

export const datePickerPage = new DatePickerPage();
