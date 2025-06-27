class SelectMenuPage {
  visit() {
    cy.visit('https://demoqa.com/select-menu');
  }

  selectGroupOption(option) {
    cy.get('#withOptGroup').click();
    cy.get('div[id*="react-select-2-option"]').contains(option).click();
  }

  selectOneOption(option) {
    cy.get('#selectOne').click();
    cy.get('div[id*="react-select-3-option"]').contains(option).click();
  }

  selectOldStyleMenu(option) {
    cy.get('#oldSelectMenu').select(option);
  }

  selectMultiOptions(options) {
    cy.get('.css-2b097c-container').eq(2).click(); // Multi select
    options.forEach((opt) => {
      cy.get('div[id*="react-select-4-option"]').contains(opt).click();
    });
  }
}

export const selectMenuPage = new SelectMenuPage();
