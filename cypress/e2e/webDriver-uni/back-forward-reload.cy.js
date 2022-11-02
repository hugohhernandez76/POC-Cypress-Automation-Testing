/// <reference types="cypress" />
describe('Browser Navigation', () => {
    beforeEach(() => {
        cy.visit("/");
      });
    it('Confirm links redirect to correct page', () => {
        cy.get("#contact-us").invoke("removeAttr", "target").click()
        cy.url().should("include", "contactus")
        //to go back we use cy.go()
        cy.go("back")
        cy.reload()
        //cy.reload(true) will reload page without using cache
        cy.go("forward")
        cy.url().should("include", "contactus")
        cy.go("back")

        cy.get("#login-portal").invoke("removeAttr", "target").click()
        cy.url().should("include", "Login-Portal")
        cy.go("back")

        
        cy.get("#to-do-list").invoke("removeAttr", "target").click()
        cy.url().should("include", "To-Do-List")
        cy.go("back")
        cy.title().should("include", "WebDriverUniversity.com")
    });
});