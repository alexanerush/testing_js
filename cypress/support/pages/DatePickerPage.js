class DatePickerPage {
    visit() {
      cy.visit('https://demoqa.com/date-picker');
    }
  
    selectDate(date) {
      cy.get('#datePickerMonthYearInput')
        .clear()
        .type(`${date}{enter}`);
    }
  
    checkSelectedDate(expectedDate) {
      cy.get('#datePickerMonthYearInput')
        .should('have.value', expectedDate);
    }
  }
  
  export const datePickerPage = new DatePickerPage();
  