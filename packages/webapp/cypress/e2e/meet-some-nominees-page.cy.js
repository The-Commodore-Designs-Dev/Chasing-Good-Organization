/// <reference types="cypress" />

context('Meet The Winners Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('/pages/meet-the-winners')
  }, 5000)

  it('should navigate to /pages/meet-the-winners', () => {
    cy.location('pathname').should('include', 'meet-the-winners')
  })

  it('should reload the page', () => {
    cy.reload()

    cy.reload(true)
  })

  describe('Clicking the top menu tabs', () => {
    it('should go to the home page', () => {
      cy.get('.logo').parent('a').click('center').location('pathname').should('include', 'home')
    })

    it('should go to the about page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-0').click('center').location('pathname').should('include', 'about')
    })
    
    it('should go to the submissions page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-1').click('center').location('pathname').should('include', 'submit-your-story')
    })

    it('should go to the contact page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-3').click('center').location('pathname').should('include', 'contact-us')
    })
  })

  describe('Reading the content on the page', () => {
    it('should read the sample stories header', () => {
      cy.get('.mat-card-title').should('contain.text', `Meet The Winners`)
    })

  })

  describe('Include the footer on the page', () => { 
    it('should be present on the page', () => {
      cy.get('app-footer').should('be.visible')
    })  
  })
})
