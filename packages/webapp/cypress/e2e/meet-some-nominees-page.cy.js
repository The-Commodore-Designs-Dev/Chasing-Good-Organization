/// <reference types="cypress" />

context('Meet Some Nominees Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit('/pages/meet-some-nominees')
  }, 5000)

  it('should navigate to /pages/meet-some-nominees', () => {
    cy.location('pathname').should('include', 'meet-some-nominees')
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
      cy.get('.mat-card-title').should('contain.text', `Sample Stories`)
    })

    it('should read the first sample story', () => {
      cy.get('.mat-card').children('p').eq(0).should('contain.text', `Hi, my name is Victor and I’m in 8th grade. My favorite sport is basketball. My PE teacher, Mr. McCarthy, told me I should tell you this story about what happened last year, so here it is. Last year, when I was in 7th grade, a new boy my age moved into my neighbor’s house 2 doors away. The neighbors already lived there, but AJ moved in with them because he was a foster kid. I didn’t really know what a foster kid was when I met AJ, but he told me his dad was in jail and his mom was having trouble taking care of him so he had to Iive with foster parents for a little while. He seemed kind of sad when he told me about his parents but I could understand a little bit how he felt because my mom is a single mom so I know what it’s like to miss a parent. Because of COVID, AJ and I didn’t have regular school all year, we just had virtual school until 12:30. I hated virtual school, but partly it was great because AJ and I could play basketball every day in the afternoon together. We had so much fun because AJ loves basketball just as much as I do! We became best friends. For my 13th birthday in November, my mom gave me a new Evolution basketball. I shared it with AJ and we had a great time. Then the worst day came in April when AJ had to leave to go live with his aunt in the city. I was so sad the day he left but I gave him my Evolution basketball so he could remember me. He had never had his own basketball and he said he didn’t know any kids that had their own either. I kept thinking about him when he left. Then I thought of a good idea - maybe I could ask people to give basketballs to other kids in AJ’s town so they could all play basketball, too. Mr. McCarthy helped me send an email through our middle school saying we would collect new basketballs to donate to AJ’s school. We did a drop-off on a Saturday at school and we collected 97 basketballs! Mr. McCarthy stored them at school for me and called AJ’s PE teacher so we could give them to his school. My mom and 3 more moms drove their minivans to the city to drop off the basketballs. I even got to see AJ that day! Now the PE teacher at AJ’s school gives the basketballs out as prizes for good behavior in school. It made me feel so good that AJ and his new friends can play basketball together just like we did. But I still miss him.`)
    })

    it('should read the second sample story', () => {
      cy.get('.mat-card').children('p').eq(2).should('contain.text', `My husband died in a car crash in 2013. When that happened I was angry at everything. I was so angry at him for leaving me a widow at age 38 with two small kids. I was angry at the man who hit his car and killed my husband. I was angry at God. I was angry at my friends for still having a spouse and my sister for trying to “make it all fine”, even though I know she had the best of intentions. Today I am nominating my friend, Andrea, for the Chasing Good Award because although she may not know it, she really saved me. Andrea is a college friend and lucky for me, she lives 20 minutes away. When my husband died, she came to my house every single day for one full year and left my favorite drink (a mocha latte) on my steps. Some days she added a croissant or a scone, but the drink was the same and was always there. She didn’t knock or ring the bell or want “credit” for her good deed. She just left it. I think it was a “good deed” and worthy of this award because she took time out of her busy life and her days to do something nice for a friend who was suffering. I don’t know many people who would drive 20 minutes every single morning for 365 mornings so that someone knew they were loved and that someone cared. I learned from Andrea that you usually know who your real friends are in the good times, but you REALLY know who your friends are in the worst times. I will forever be grateful to her for that life lesson. `)
    })
  })

  describe('Include the footer on the page', () => { 
    it('should be present on the page', () => {
      cy.get('app-footer').should('be.visible')
    })  
  })
})