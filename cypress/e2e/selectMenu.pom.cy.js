import { selectMenuPage } from '../support/pages/SelectMenuPage';

describe('Select Menu Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    selectMenuPage.visit();
  });

  it('selects all necessary options from dropdowns using POM', () => {
    selectMenuPage.selectGroupOption();
    selectMenuPage.selectOneOption();
    selectMenuPage.selectOldStyleMenu();
    selectMenuPage.selectMultiOptions();
  });
});
