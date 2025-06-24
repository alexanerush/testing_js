import { radioButtonPage } from '../support/pages/RadioButtonPage';

describe('Radio Button Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    radioButtonPage.visit();
  });

  it('selects Yes and checks result', () => {
    radioButtonPage.selectRadio('Yes');
    radioButtonPage.checkResult('Yes');
  });

  it('selects Impressive and checks result', () => {
    radioButtonPage.selectRadio('Impressive');
    radioButtonPage.checkResult('Impressive');
  });
});
