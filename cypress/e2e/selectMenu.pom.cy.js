import { selectMenuPage } from '../support/pages/SelectMenuPage';

describe('Select Menu Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    selectMenuPage.visit();
  });

  it('selects values from all dropdowns', () => {
    selectMenuPage.selectGroupOption('Group 1, option 2');
    selectMenuPage.selectOneOption('Dr.');
    selectMenuPage.selectOldStyleMenu('Blue');
    selectMenuPage.selectMultiOptions(['Green', 'Blue']);
  });
});
