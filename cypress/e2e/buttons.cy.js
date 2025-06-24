describe('Buttons Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://demoqa.com/buttons');
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

    cy.contains('button', /^Click Me$/).click();
    cy.get('#dynamicClickMessage', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'You have done a dynamic click');
  });
});
