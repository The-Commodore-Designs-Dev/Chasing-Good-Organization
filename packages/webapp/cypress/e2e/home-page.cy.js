/// <reference types="cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('/')
  }, 5000)

  it('should navigate to /home', () => {
    cy.location('pathname').should('include', 'home')
  })

  it('should reload the page', () => {
    cy.reload()

    cy.reload(true)
  })

  describe('Clicking the top menu tabs', () => {
    it('should go to the about page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-0').click('center').location('pathname').should('include', 'about')
    })
    
    it('should go to the submissions page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-1').click('center').location('pathname').should('include', 'submit-your-story')
    })
    
    it('should go to the sample stories page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-2').click('center').location('pathname').should('include', 'meet-some-nominees')
    })

    it('should go to the contact page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-3').click('center').location('pathname').should('include', 'contact-us')
    })
  })

  describe('Reading the content on the page', () => {
    it('should read the first paragraph', () => {
      cy.get('p.big').eq(0).should('contain.text', `Are you a NJ resident who has done something good in your community, your life, or the world?`)
      cy.get('p.big').eq(1).should('contain.text', `Do you know someone who is from NJ and has “done some good” in this world and want to nominate them for an award?`)
      cy.get('p.big').eq(2).should('contain.text', `Are you part of a NJ organization that does good?`)
    })

    it('should read the second paragraph', () => {
      cy.get('p.smaller-para').eq(0).should('contain.text', `If you answered “yes”- tell us about it! We are chasing good in the world and rewarding people for their good deeds, good works, and in general doing good.  We believe there is so much good in the world- we need to find it and celebrate it!`)
      cy.get('p.smaller-para').eq(1).should('contain.text', `Share your story with us and you could be granted an award. Awards will range from $500 - $1000. We will be showcasing and highlighting good deeds, good people and good organizations!`)
      cy.get('p.smaller-para').eq(2).should('contain.text', `Fill out the form on the Submit Your Story page and write your story or upload a video.`)
      cy.get('p.smaller-para').eq(3).should('contain.text', `We can’t wait to see the GOOD you have done!`)
    })
  })

  describe('Include the footer on the page', () => { 
    it('should be present on the page', () => {
      cy.get('app-footer').should('be.visible')
    })  
  })
})
