/// <reference types="cypress" />

context('Cintact Us Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('/pages/contact-us')
  }, 5000)

  it('should navigate to /pages/contact-us', () => {
    cy.location('pathname').should('include', 'contact-us')
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
    
    it('should go to the sample stories page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-2').click('center').location('pathname').should('include', 'meet-the-winners')
    })
  })

  describe('Reading the content on the page', () => {
    it('should read the contact us header', () => {
      cy.get('.mat-card-title').should('contain.text', `Contact Us`)
    })

    it('should read the contact us subtitle', () => {
      cy.get('.mat-card-subtitle').should('contain.text', `If you have any questions, feel free to email us or use snail mail!`)
    })

    it('should read the contact us email wrapper', () => {
      cy.get('.email-wrapper').should('contain.text', `Email Addresschasinggoodnj@gmail.com`)
    })

    it('should read the contact us address wrapper', () => {
      cy.get('.address-wrapper').should('contain.text', `Address Chasing Good PO Box 155 Cranford, NJ 07016`)
    })
  })

  describe('Clicking the email address', () => { 
    it('should open the users mail client', () => {
      //TODO: Write tests for clicking the email address
    })
  })

  describe('Clicking the address', () => { 
    it('should open Google Maps', () => {
      //TODO: Write tests for clicking the address
    })
  })

  describe('Include the footer on the page', () => { 
    it('should be present on the page', () => {
      cy.get('app-footer').should('be.visible')
    })  
  })
})
