import { alertsPage } from '../support/pages/AlertsPage';

describe('Alerts Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    alertsPage.visit();
  });

  it('handles alert box', () => {
    alertsPage.clickAlertButton();
  });

  it('handles timed alert', () => {
    alertsPage.clickTimerAlertButton();
  });

  it('handles confirm alert with Ok', () => {
    alertsPage.clickConfirmButton(true);
  });

  it('handles confirm alert with Cancel', () => {
    alertsPage.clickConfirmButton(false);
  });

  it('handles prompt alert', () => {
    alertsPage.clickPromptButton('Санечка');
  });
});
