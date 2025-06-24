import { formPage } from '../support/pages/FormPage';

describe('Practice Form', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    formPage.visit();
  });

  it('fills the form using POM and submits', () => {
    formPage.fillBasicInfo();
    formPage.fillSubjectsAndHobbies();
    formPage.selectStateAndCity();
    formPage.submitForm();
    formPage.checkSubmission();
  });
});
