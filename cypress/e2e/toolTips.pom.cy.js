import { toolTipsPage } from '../support/pages/ToolTipsPage';

describe('Tool Tips Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    toolTipsPage.visit();
  });

  it('shows tooltip on hover over the button', () => {
    toolTipsPage.hoverOnToolTip('#toolTipButton');
  });

  it('shows tooltip on hover over the text field', () => {
    toolTipsPage.hoverOnToolTip('#toolTipTextField');
  });

  it('shows tooltip on hover over the first link', () => {
    toolTipsPage.hoverOnToolTipByText('Contrary');
  });

  it('shows tooltip on hover over the second link', () => {
    toolTipsPage.hoverOnToolTipByText('1.10.32');
  });
});
