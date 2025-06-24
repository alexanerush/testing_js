describe('Text Box Form', () => {
  Cypress.on('uncaught:exception', () => false);

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });

  it('fills the form with random data and checks the result', () => {
    const fullName = 'Тестинг НичегоНеРаботает';
    const email = `test${Date.now()}@mail.com`;
    const currentAddress = 'г. Тестово, ул. Автоматизации, 1';
    const permanentAddress = 'г. Питестово, ул. Фронтендовая, 22';

    cy.get('#userName').type(fullName);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type(currentAddress);
    cy.get('#permanentAddress').type(permanentAddress);

    cy.get('#submit').click({ force: true });

    cy.get('#output').should('be.visible');
    cy.get('#output #name').should('contain', fullName);
    cy.get('#output #email').should('contain', email);
    cy.get('#output #currentAddress').should('contain', currentAddress);
    cy.get('#output #permanentAddress').should('contain', permanentAddress);
  });
});
