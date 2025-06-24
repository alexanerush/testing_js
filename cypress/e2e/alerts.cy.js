// Отключаем фейл тестов при непойманных исключениях (например, из-за CORS)
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Alerts Page', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/alerts');
    });
  
    it('checks alert with OK button', () => {
      cy.get('#alertButton').click();
      cy.on('window:alert', (txt) => {
        expect(txt).to.contain('You clicked a button');
      });
    });
  
    it('checks confirm alert - accepts', () => {
      cy.get('#confirmButton').click();
      cy.on('window:confirm', () => true);
      cy.get('#confirmResult').should('contain', 'You selected Ok');
    });
  
    it('checks confirm alert - cancels', () => {
      cy.get('#confirmButton').click();
      cy.on('window:confirm', () => false);
      cy.get('#confirmResult').should('contain', 'You selected Cancel');
    });
  
    it('checks prompt alert', () => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Cypress');
        cy.get('#promtButton').click();
      });
      cy.get('#promptResult').should('contain', 'You entered Cypress');
    });
  });
  