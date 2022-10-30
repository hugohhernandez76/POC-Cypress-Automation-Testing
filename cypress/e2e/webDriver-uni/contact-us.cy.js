/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    beforeEach(function(){
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    })
    before(function() {
        cy.fixture("example").then(function(data){
            //this.data = data
            globalThis.data = data
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.contactForm_submit(data.first_name, data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!")
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.contactForm_submit(data.first_name, data.last_name, " ", "How can I learn Cypress?", "body", "Error: Invalid email address")
    });
})