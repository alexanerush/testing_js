describe('Select Menu Page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/select-menu');
    Cypress.on('uncaught:exception', () => false);
  });

  it('selects options from all dropdowns', () => {
    cy.get('#withOptGroup').click();
    cy.get('div[id^="react-select"]').contains('Group 2, option 1').click({ force: true });

    cy.get('#selectOne').click();
    cy.get('div[id^="react-select"]').contains('Other').click({ force: true });

    cy.get('#oldSelectMenu').select('Green');

    cy.wait(300);
    cy.get('.css-2b097c-container input').eq(2).type('Black{enter}', { force: true });
    cy.get('.css-2b097c-container input').eq(2).type('Blue{enter}', { force: true });
  });
});
