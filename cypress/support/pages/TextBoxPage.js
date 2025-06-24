class TextBoxPage {
  visit() {
    cy.visit('https://demoqa.com/text-box');
  }

  fillForm({
    fullName, email, currentAddress, permanentAddress,
  }) {
    cy.get('#userName').type(fullName);
    cy.get('#userEmail').type(email);
    cy.get('#currentAddress').type(currentAddress);
    cy.get('#permanentAddress').type(permanentAddress);
  }

  submit() {
    cy.get('#submit').click({ force: true });
  }

  checkResults({
    fullName, email, currentAddress, permanentAddress,
  }) {
    cy.get('#output').should('be.visible');
    cy.get('#name').should('contain', fullName);
    cy.get('#email').should('contain', email);
    cy.get('p#currentAddress').should('contain', currentAddress);
    cy.get('p#permanentAddress').should('contain', permanentAddress);
  }
}

export const textBoxPage = new TextBoxPage();
