/// <reference types="cypress" />

context('Submit Your Story Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('/pages/submit-your-story')
  }, 5000)

  it('should navigate to /pages/submit-your-story', () => {
    cy.location('pathname').should('include', 'submit-your-story')
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
    
    it('should go to the sample stories page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-2').click('center').location('pathname').should('include', 'meet-the-winners')
    })

    it('should go to the contact page', () => {
      cy.get('.mat-tab-links').children('#mat-tab-link-3').click('center').location('pathname').should('include', 'contact-us')
    })
  })

  describe('Reading the content on the page', () => {
    it('should read the top heading', () => {
      cy.get('.instructions').eq(0).should('contain.text', `How it Works`)
    })

    it('should read step 1 in the process', () => {
      cy.get('.instructions').eq(1).children('h2').should('contain.text', `1. Nominate someone, yourself, or an organization`)
      cy.get('.instructions').eq(1).children('div').should('contain.text', `Only available to NJ residents/organizations who have done good deed(s).  This can be an isolated situation or something ongoing - whatever you consider “good deeds”Submit the form between 5/1/2022 and 7/31/2022Awards will range from $500 - $1000`)
    })

    it('should read step 2 in the process', () => {
      cy.get('.the-form').children('h2').should('contain.text', `2. Start the form`)
      cy.get('.the-form').children('p').should('contain.text', `Follow the steps and fill out the form below to tell us the GOOD you have done!`)
    })

    it('should read step 3 in the process', () => {
      cy.get('.instructions').eq(2).children('h2').should('contain.text', `3. Entries will be judged`)
      cy.get('.instructions').eq(2).children('p').should('contain.text', `Entries will be judged by the Chasing Good Voting Committee`)
    })

    it('should read step 4 in the process', () => {
      cy.get('.instructions').eq(3).children('h2').should('contain.text', `4. Sit back and wait`)
      cy.get('.instructions').eq(3).children('p').eq(0).should('contain.text', `Sit back and know that it pays to do good!`)
      cy.get('.instructions').eq(3).children('p').eq(1).should('contain.text', `Please email us at chasinggoodnj@gmail.com if your submission doesn't go through so we can fix any problems.`)
    })

    it('should read step 5 in the process', () => {
      cy.get('.instructions').eq(4).children('h2').should('contain.text', `5. We contact potential winners`)
      cy.get('.instructions').eq(4).children('p').should('contain.text', `We will contact potential award winners to let them know or we may email/call you for further information.`)
    })

    it('should read step 6 in the process', () => {
      cy.get('.instructions').eq(5).children('h2').should('contain.text', `6. Winners will be notified`)
      cy.get('.instructions').eq(5).children('p').should('contain.text', `Award winners of the Chasing Good Award(s) will be notified and mailed a check (TBD if we will be able to have an awards ceremony in 2022).`)
    })
  })

  describe('Filling and submitting the form', () => {
    it('should fill out, review, and submit the form and get a message at the end saying Thank You', () => {
      cy.get('#firstNameNominator').should('be.visible').type('TEST')
      cy.get('#lastNameNominator').should('be.visible').type('TEST')
      cy.get('#emailNominator').should('be.visible').type('test@email.com')
      cy.get('#phoneNominator').should('be.visible').type('9149607387')
      cy.get('#cdk-step-content-0-0 > div > div > button').should('be.visible').click()
    
      cy.get('#mat-radio-2').should('be.visible').click()
      cy.get('#category').should('be.visible').click().get('#mat-option-1').click()
      cy.get('#mat-select-value-3').should('be.visible').click().get('#mat-option-3').click()
      //TODO: Clicking the back button and forward again
      cy.get('#cdk-step-content-0-1 > div > div > button.mat-focus-indicator.mat-stepper-next.nxt-btn.mat-button.mat-button-base').should('be.visible').click()    
    
      cy.get('#yourStory').should('be.visible').type('TEST')
      //TODO: Selecting and uploading a video in mp4 format
      //TODO: Clicking the back button and forward again
      cy.get('#cdk-step-content-0-2 > div > div > button.mat-focus-indicator.mat-stepper-next.nxt-btn.mat-button.mat-button-base').should('be.visible').click()    
    
      //TODO: Filling in the references section because right now it is not required
      //TODO: Clicking the back button and forward again
      cy.get('#cdk-step-content-0-3 > div > div > button.mat-focus-indicator.mat-stepper-next.nxt-btn.mat-button.mat-button-base').should('be.visible').click()

      cy.get('#disclaimer').should('be.visible').click()
      //TODO: Clicking the back button and forward again
      cy.get('#cdk-step-content-0-4 > div > div > button.mat-focus-indicator.mat-stepper-next.nxt-btn.mat-button.mat-button-base').should('be.visible').click()
      
      cy.get('.name.review').should('contain.text', `My name is TEST TEST.`)
      cy.get('.email.review').should('contain.text', `My email is test@email.com.`)
      cy.get('.phone.review').should('contain.text', `My phone number is 9149607387.`)
      cy.get('.nominating.review').should('contain.text', `I am nominating myself, and I'm from Atlantic County.`)
      cy.get('.category').should('contain.text', ` An Individual 18 Or Over Who Has Done Good `)
      cy.get('.story.review').should('contain.text', `TEST`)
      //TODO: Check the video review section
      //TODO: Check the reference review section
      cy.get('#cdk-step-content-0-5 > div > div.mt.ng-star-inserted > button.mat-focus-indicator.mat-stepper-next.submit-btn.mat-button.mat-button-base')
        .click()
        .wait(5000)
        .get('.sent')
        .should('contain.text', `Thank you, your form has been submitted successfully!`)
    })
  })

  describe('Include the footer on the page', () => { 
    it('should be present on the page', () => {
      cy.get('app-footer').should('be.visible')
    })  
  })
})
