/// <reference types="cypress" />
describe("Handlinng Alerts", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.title("contains", "WebDriver | IFrame")
    });
    it("Confirm Correct Text Alert", () => {
      cy.get("#iframe").invoke("removeAttr", "target").click();
      cy.url().should("include", "IFrame");
        //We are using an alias to get access to the body where the other elements are allocated
      cy.get("#frame").then(($iframe) => {
        const body = $iframe.contents().find("body")
        cy.wrap(body).as("iframe")
      })
      cy.get("@iframe").find("#button-find-out-more").click()
      cy.get("@iframe").find("#myModal").as("modal")
      cy.get("@modal").should(($expectedText) => {
        const text = $expectedText.text()
        expect(text).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical goods ")
      })
      cy.get("@modal").contains("Close").click()
      
    });
});