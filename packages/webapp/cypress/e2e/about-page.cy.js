/// <reference types="cypress" />

context('About Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('/pages/about')
  }, 5000)

  it('should navigate to /pages/about', () => {
    cy.location('pathname').should('include', 'about')
  })

  it('should reload the page', () => {
    cy.reload()

    cy.reload(true)
  })

  describe('Clicking the top menu tabs', () => {
    it('should go to the home page', () => {
      cy.get('.logo').parent('a').click('center').location('pathname').should('include', 'home')
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
    it('should inlude a header image and be visible', () => {
      cy.get('.family-image').find('img').should('be.visible').and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    })

    it('should read the quote', () => {
      cy.get('.quote-wrap').should('contain.text', `How far that little candle throws his beams! So shines a good deed in a weary world. --William Shakespeare`)
    })

    it('should read the greeting', () => {
      cy.get('.greeting').should('contain.text', `Welcome from the Chasing Good Family!`)
    })

    it('should read our story section of two paragraphs', () => {
      cy.get('.our-story-1').should('contain.text', `It all started when Barbara and Nick married and raised their three daughters in New Jersey. As the girls grew older they witnessed their parents perform countless good deeds and selfless acts of kindness. They can remember their mom, a teacher, offering to help a struggling family in the district and their dad bringing bread to a social service agency for years. They welcomed people into their home, played a huge role in the church, and always thought of others before themselves. From sponsoring children in third world countries, to cooking and serving at soup kitchens, to organizing gifts and holiday food for needy families, Barbara and Nick set an incredible example of lives well-lived. Their girls; Michele, Christine, Antonia and later Johannah learned the impact and importance of volunteerism, which would ignite a passion inside of them. The idea of doing good and helping others was eventually passed on to the next generation of nine grandchildren ranging in age from 13-25.`)
      cy.get('.our-story-2').should('contain.text', `Barbara and Nick, their children, sons-in-law, and grandchildren have all witnessed love and kindness throughout the years and wanted to create an organization to showcase and celebrate kind deeds out in the world. Together as a family, we are proud to present the Chasing Good Award (s) as we find good in the world! The goal is to discover inspiring, kind stories and reward the winners…because the world could always use some extra good in it!`)
    })
  })

  describe('Include the footer on the page', () => { 
    it('should be present on the page', () => {
      cy.get('app-footer').should('be.visible')
    })  
  })
})
