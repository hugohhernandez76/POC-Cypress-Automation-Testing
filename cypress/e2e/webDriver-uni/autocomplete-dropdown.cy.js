/// <reference types="cypress" />
describe('Handling Autocomplete dropdown list', () => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#autocomplete-textfield")
          .invoke("removeAttr", "target")
          .click();
          cy.title("WebDriver | Contact Us");
      });
    it('Select word from autocomplete dropdown list', () => {
        cy.get("#myInput").type("P")
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) =>{
            const listItems = $el.text()
            const itemSelected = "Pancakes"
            if (listItems === itemSelected) {
                cy.wrap($el).click()
                cy.get("#submit-button").click()
                cy.url().should("include", itemSelected)
            }
        })
    });
});