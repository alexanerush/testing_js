import { textBoxPage } from '../support/pages/TextBoxPage';

describe('Text Box Page', () => {
  const fullName = 'Тестинг НичегоНеРаботает';
  const email = `test${Date.now()}@mail.com`;
  const currentAddress = 'г. Тестово, ул. Автоматизации, 1';
  const permanentAddress = 'г. Питестово, ул. Фронтендовая, 22';

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    textBoxPage.visit();
  });

  it('fills text box form and checks result using POM', () => {
    textBoxPage.fillForm(fullName, email, currentAddress, permanentAddress);
    textBoxPage.submit();
    textBoxPage.checkResults(fullName, email, currentAddress, permanentAddress);
  });
});
