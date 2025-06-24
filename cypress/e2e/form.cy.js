describe('Practice Form', () => {
    Cypress.on('uncaught:exception', () => false);
  
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('fills the form and submits', () => {
      cy.get('#firstName').type('Санечка');
      cy.get('#lastName').type('Тестовая');
      cy.get('#userEmail').type('test@example.com');
      cy.get('label[for="gender-radio-2"]').click();
      cy.get('#userNumber').type('9123456789');
      cy.get('#subjectsInput').type('Maths{enter}');
      cy.get('label[for="hobbies-checkbox-1"]').click();
      cy.get('label[for="hobbies-checkbox-2"]').click();
      cy.get('#currentAddress').type('Улица Тестовая, дом 42');
  
     
      cy.get('#state').scrollIntoView().click();
      cy.get('.css-26l3qy-menu div').contains('NCR').click();
  
      
      cy.get('#city').scrollIntoView().click();
      cy.get('.css-26l3qy-menu div').contains('Delhi').click();
  
      cy.get('#submit').click({ force: true });
  
    
      cy.get('.modal-content').should('be.visible');
      cy.get('#example-modal-sizes-title-lg')
        .should('contain', 'Thanks for submitting the form');
    });
  });
  