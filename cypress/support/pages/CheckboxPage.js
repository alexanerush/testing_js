class CheckboxPage {
  visit() {
    cy.visit('https://demoqa.com/checkbox');
  }

  expandAll() {
    cy.get('.rct-option-expand-all').click({ force: true });
  }

  selectCheckbox(labelText) {
    cy.contains('.rct-node', labelText)
      .find('label .rct-checkbox')
      .eq(0)
      .click({ force: true });
  }

  checkResult(labelText) {
    cy.get('#result').should('contain', labelText.toLowerCase());
  }
}

export const checkboxPage = new CheckboxPage();
