/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://developer.mozilla.org/');
    cy.get('.main-document-header-container').should('be.visible');

    cy.origin('https://commonvoice.mozilla.org/', () => {
      cy.visit('https://commonvoice.mozilla.org/')
      cy.get('div.header-wrapper').should('be.visible');
    })
  })
})
