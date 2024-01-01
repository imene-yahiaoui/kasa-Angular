/// <reference types="cypress" />

describe('kasa', () => {
  it('aller a la page about  ', () => {
    cy.visit('http://localhost:4200');
  cy.get('.nav > :nth-child(2) > a').click()
  cy.get('[ng-reflect-title="Fiabilité "] > .collapse > .collapse-title > div > .fa-angle-down').click()
  });
});



