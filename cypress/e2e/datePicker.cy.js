describe('Date Picker Page', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
      cy.visit('https://demoqa.com/date-picker');
    });
  
    it('selects a specific date and checks the result', () => {
      const targetDate = '06/30/2025'; 
  
      cy.get('#datePickerMonthYearInput')
        .clear()
        .type(`${targetDate}{enter}`);
  
      cy.get('#datePickerMonthYearInput')
        .should('have.value', targetDate);
    });
  });
  