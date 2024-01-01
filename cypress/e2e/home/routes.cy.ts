/// <reference types="cypress" />

context('if I am in home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should navigate to the home page when "Accueil" is clicked', () => {
    cy.get('.nav > :nth-child(1) > a').click();
    cy.url().should('include', '/');
  });

  it('should navigate to the "Accommodate" page when it is clicked', () => {
    cy.get('[ng-reflect-id="c67ab8a7"] > a > .frame > .middle').click();
    cy.url().should('include', 'accommodate');
  });

  it('should navigate to the "About" page when it is clicked', () => {
    cy.get('.nav > :nth-child(2) > a').click();
    cy.url().should('include', 'about');
  });

  it('should navigate to the home page when the logo is clicked', () => {
    cy.get('.logo').click();
    cy.url().should('include', '/');
  });

  it('should go to the 404 page when a specific URL is visited', () => {
    const urlToVisit = 'http://localhost:4200/maison';
    cy.visit(urlToVisit);
    cy.get('.notFound-img');
  });

  it('should navigate to the home page when "<Retourner sur la page d accueil>" is clicked on the 404 page', () => {
    const urlToVisit = 'http://localhost:4200/maison';
    cy.visit(urlToVisit);
    cy.get('.notFound > a').click();
    cy.url().should('include', '/');
  });
});
