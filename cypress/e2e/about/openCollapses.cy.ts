/// <reference types="cypress" />

context('kasa', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('.nav > :nth-child(2) > a').click();
  });

  it('should open all collapse', () => {
    cy.get(
      '[ng-reflect-title="Fiabilité "] > .collapse > .collapse-title > div > .fa-angle-down'
    ).click();
    cy.get(
      '[ng-reflect-title="Service"] > .collapse > .collapse-title > div > .fa-angle-down'
    ).click();
    cy.get(
      '[ng-reflect-title="Respect"] > .collapse > .collapse-title > div > .fa-angle-down'
    ).click();
    cy.get(
      '[ng-reflect-title="Sécurité"] > .collapse > .collapse-title > div > .fa-angle-down'
    ).click();
  });
});



 