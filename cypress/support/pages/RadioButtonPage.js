class RadioButtonPage {
    visit() {
      cy.visit('https://demoqa.com/radio-button');
    }
  
    selectRadio(optionLabel) {
      cy.contains('label', optionLabel).click({ force: true });
    }
  
    checkResult(optionValue) {
      cy.get('.text-success').should('contain', optionValue);
    }
  }
  
  export const radioPage = new RadioButtonPage();
  