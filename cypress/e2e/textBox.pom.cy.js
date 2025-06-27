import { textBoxPage } from '../support/pages/TextBoxPage';

describe('Text Box Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    textBoxPage.visit();
  });

  it('fills in the form and checks the submitted data', () => {
    textBoxPage.fillForm({
      fullName: 'Санечка Тест',
      email: 'sanya@example.com',
      currentAddress: 'ул. Тестовая, 42',
      permanentAddress: 'г. Тестоград',
    });

    textBoxPage.submit();
    textBoxPage.checkResults({
      fullName: 'Санечка Тест',
      email: 'sanya@example.com',
      currentAddress: 'ул. Тестовая, 42',
      permanentAddress: 'г. Тестоград',
    });
  });
});
