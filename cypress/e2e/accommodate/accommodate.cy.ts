/// <reference types="cypress" />

context('Accommodate', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get('[ng-reflect-id="b9123946"] > a > .frame > .middle').click();
  });
  it('title exicte', () => {
    cy.get('.info_titre').should('exist');
  });
  it('name user exicte', () => {
    cy.get('.info_utilisateur_name').should('exist');
  });
  it('picture user exicte', () => {
    cy.get('.info_utilisateur_img').should('exist');
  });
  it('description exicte', () => {
    cy.get(
      '[ng-reflect-title="description"] > .collapse > .collapse-title'
    ).should('exist');
  });
});
