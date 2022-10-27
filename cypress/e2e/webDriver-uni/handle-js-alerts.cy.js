/// <reference types="cypress" />
describe('Handlinng Alerts', () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/");
      });
    it('Confirm Correct Text Alert', () => {
        cy.get("#popup-alerts").invoke("removeAttr", "target").click()
        cy.url().should("include", "Popup-Alerts")
        //Validating I landed in the correct page so I extracted the text to confirm the page.
        cy.xpath("//div[@id='main-header']/h1").then(($alertsPage) => {
            const validateAlertsPage = $alertsPage.text();
            expect(validateAlertsPage).to.eq("Annoying Popup & Alerts!")
        })
        cy.get("#button1").click()
        
    });
})