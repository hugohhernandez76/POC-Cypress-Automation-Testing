/// <reference types="cypress" />
describe("Handling Autocomplete dropdown list", () => {
  before(function () { //the function will allow the site to be visited once and run all test
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    cy.title("WebDriver | Contact Us");
  })
  
  it("Select word from autocomplete dropdown list", () => {
    cy.get("#myInput").type("L");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const listItems = $el.text();
        const itemSelected = "Linguine";
        if (listItems === itemSelected) {
          cy.wrap($el).click();
          cy.get("#submit-button").click();
          cy.url().should("include", itemSelected);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const listItems = $el.text();
          const itemSelected = "Grapes";
          if (listItems === itemSelected) {
            cy.wrap($el).click();
            cy.get("#submit-button").click();
            cy.url().should("include", itemSelected);
          }
        });
      });
  });
});
