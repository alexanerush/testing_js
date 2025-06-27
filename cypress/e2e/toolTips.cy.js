describe('Tool Tips Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://demoqa.com/tool-tips');
  });

  it('checks tooltip on button', () => {
    cy.get('#toolTipButton').trigger('mouseover');
    cy.wait(300);
    cy.get('.tooltip-inner', { timeout: 4000 })
      .should('be.visible')
      .and('contain', 'You hovered over the Button');
  });

  it('checks tooltip on text field', () => {
    cy.get('#toolTipTextField').trigger('mouseover');
    cy.wait(300);
    cy.get('.tooltip-inner', { timeout: 4000 })
      .should('be.visible')
      .and('contain', 'You hovered over the text field');
  });

  it('checks tooltip on Contrary link', () => {
    cy.contains('a', 'Contrary').scrollIntoView();
    cy.contains('a', 'Contrary').trigger('mouseover');
    cy.wait(300);
    cy.get('.tooltip-inner', { timeout: 4000 })
      .should('be.visible')
      .and('contain', 'You hovered over the Contrary');
  });

  it('checks tooltip on 1.10.32 link', () => {
    cy.contains('a', '1.10.32').scrollIntoView();
    cy.contains('a', '1.10.32').trigger('mouseover');
    cy.wait(300);
    cy.get('.tooltip-inner', { timeout: 4000 })
      .should('be.visible')
      .and('contain', 'You hovered over the 1.10.32');
  });
});
