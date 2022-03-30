import { browser } from 'protractor';

describe('Protractor Demo App', function() {
    it('should have a title', async function() {
      browser.get('http://demo.chasinggood.org');
  
      expect(await browser.getTitle()).toEqual('Chasing Good');
    });
});