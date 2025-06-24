class ToolTipsPage {
  visit() {
    cy.visit('https://demoqa.com/tool-tips');
  }

  hoverOnToolTip(selector) {
    cy.get(selector).trigger('mouseover');
    cy.get('.tooltip-inner').should('be.visible');
  }

  hoverOnToolTipByText(text) {
    cy.contains(text).trigger('mouseover');
    cy.get('.tooltip-inner').should('be.visible');
  }
}

export const toolTipsPage = new ToolTipsPage();
