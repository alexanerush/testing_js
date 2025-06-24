import { checkboxPage } from '../support/pages/CheckboxPage';

describe('Checkbox Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    checkboxPage.visit();
  });

  it('selects multiple checkboxes and checks the result', () => {
    checkboxPage.expandAll();

    const items = ['Desktop', 'Documents', 'Downloads'];
    items.forEach(item => {
      checkboxPage.selectCheckbox(item);
      checkboxPage.checkResult(item);
    });
  });
});
