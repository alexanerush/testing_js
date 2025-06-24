class SelectMenuPage {
    visit() {
      cy.visit('https://demoqa.com/select-menu');
    }
  
    selectGroupOption() {
      cy.get('#withOptGroup').click();
      cy.get('.css-26l3qy-menu').contains('Group 2, option 1').click({ force: true });
    }
  
    selectOneOption() {
      cy.get('#selectOne').click();
      cy.get('.css-26l3qy-menu').contains('Other').click({ force: true });
    }
  
    selectOldStyleMenu() {
      cy.get('#oldSelectMenu').select('Green');
    }
  
    selectMultiOptions() {
        cy.get('.css-2b097c-container input')
          .eq(2)
          .scrollIntoView()
          .type('Black{enter}', { force: true });
      
        cy.get('.css-2b097c-container input')
          .eq(2)
          .scrollIntoView()
          .type('Blue{enter}', { force: true });
      }
        
  }
  
  export const selectMenuPage = new SelectMenuPage();
  