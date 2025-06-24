describe('Buttons Page', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/buttons');
      Cypress.on('uncaught:exception', () => false); 
    });
  
    it('performs clicks and checks messages', () => {
      cy.get('#doubleClickBtn').dblclick();
      cy.get('#doubleClickMessage')
        .should('be.visible')
        .and('contain', 'You have done a double click');
  
     
      cy.get('#rightClickBtn').rightclick();
      cy.get('#rightClickMessage')
        .should('be.visible')
        .and('contain', 'You have done a right click');
  
    
      cy.get('button').contains(/^Click Me$/).click();
      cy.get('#dynamicClickMessage', { timeout: 5000 }) 
        .should('be.visible')
        .and('contain', 'You have done a dynamic click');
    });
  });
  