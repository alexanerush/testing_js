class RadioButtonPage {
  visit() {
    cy.visit('https://demoqa.com/radio-button');
  }

  selectRadio(optionText) {
    cy.contains('label', optionText).click({ force: true });
  }

  checkResult(expectedText) {
    cy.get('.text-success').should('contain', expectedText);
  }
}

export const radioButtonPage = new RadioButtonPage();
