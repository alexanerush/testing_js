import { radioPage } from '../support/pages/RadioButtonPage';

describe('Radio Button Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    radioPage.visit();
  });

  const options = ['Yes', 'Impressive'];

  options.forEach(option => {
    it(`selects ${option} radio button`, () => {
      radioPage.selectRadio(option);
      radioPage.checkResult(option);
    });
  });
});
