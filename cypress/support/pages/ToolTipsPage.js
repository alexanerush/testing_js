export class ToolTipsPage {
    hoverOnToolTip(selector, expectedText) {
      cy.get(selector)
        .scrollIntoView()
        .trigger('mouseover');
  
      cy.get('.tooltip-inner')
        .should('be.visible')
        .and('contain', expectedText);
    }
  
    hoverOnToolTipByText(tag, text, expectedText) {
      cy.contains(tag, text)
        .scrollIntoView()
        .trigger('mouseover');
  
      cy.get('.tooltip-inner')
        .should('be.visible')
        .and('contain', expectedText);
    }
  
    visit() {
      cy.visit('https://demoqa.com/tool-tips');
    }
  }
  
  export const toolTipsPage = new ToolTipsPage();
  
  