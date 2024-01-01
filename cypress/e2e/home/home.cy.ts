/// <reference types="cypress" />

it('cy.request() - make an XHR request', () => {
  cy.visit('http://localhost:4200');

  cy.request('http://localhost:4200').should((response) => {
    expect(response.status).to.eq(200);
  });
});

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('cy.window() - get the global window object', () => {
    cy.window().should('have.property', 'top');
  });

  it('cy.document() - get the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });
});
