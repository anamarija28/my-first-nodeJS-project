
// Updated test file for new branch testing

describe('My First Cypress Test', () => {
    it('Visits the Cypress website and checks the title', () => {
      cy.visit('https://www.cypress.io');
      cy.title().should('include', 'JavaScript End to End Testing Framework');
    });
  });
  