import { toolTipsPage } from '../support/pages/ToolTipsPage';

describe('Tool Tips Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    toolTipsPage.visit();
  });

  it('shows tooltip on hovering the button', () => {
    toolTipsPage.hoverOnToolTip('#toolTipButton', 'You hovered over the Button');
  });

  it('shows tooltip on hovering the text field', () => {
    toolTipsPage.hoverOnToolTip('#toolTipTextField', 'You hovered over the text field');
  });

  it('shows tooltip on hovering the Contrary link', () => {
    toolTipsPage.hoverOnToolTipByText('a', 'Contrary', 'You hovered over the Contrary');
  });

  it('shows tooltip on hovering the 1.10.32 link', () => {
    toolTipsPage.hoverOnToolTipByText('a', '1.10.32', 'You hovered over the 1.10.32');
  });
});
