/// <reference types="cypress" />

describe('Handle Multiple Browsers tab', () => {
    it('Manipulate target _blank to open another tab', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke("removeAttr", "target").click()
        
    });
});