Cypress.on('uncaught:exception', () => false);
const resolutions = [
    [1920, 1080],
    [1366, 768]
  ];
  
  resolutions.forEach(([width, height]) => {
    describe(`UI Tests at ${width}x${height}`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit('https://demoqa.com/text-box'); 
      });
  
      it('works correctly at different resolutions', () => {
        cy.get('#userName').type('Санечка');
        cy.get('#submit').click();
        cy.get('#output').should('be.visible');
      });
    });
  });
  