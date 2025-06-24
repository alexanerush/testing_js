class AlertsPage {
    visit() {
      cy.visit('https://demoqa.com/alerts');
    }
  
    clickAlertButton() {
      cy.get('#alertButton').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('You clicked a button');
      });
    }
  
    clickTimerAlertButton() {
      cy.get('#timerAlertButton').click();
      cy.wait(5000); 
      cy.on('window:alert', (str) => {
        expect(str).to.equal('This alert appeared after 5 seconds');
      });
    }
  
    clickConfirmButton(accept = true) {
      cy.get('#confirmButton').click();
      cy.on('window:confirm', () => accept);
      cy.get('#confirmResult').should('contain', accept ? 'Ok' : 'Cancel');
    }
  
    clickPromptButton(text = 'Санечка') {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(text);
        cy.get('#promtButton').click();
      });
      cy.get('#promptResult').should('contain', text);
    }
  }
  
  export const alertsPage = new AlertsPage();
  