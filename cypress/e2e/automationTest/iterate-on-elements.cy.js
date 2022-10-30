/// <reference types="cypress" />
describe('Iterate over elements', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
      });
    it('Selecting a particular element ', () => {
        cy.get("a[href*='product/category']").contains("Makeup").click()
        cy.selectProduct("Product with stock locations")

    });
    it('Selecting a particular element ', () => {
        cy.get("a[href*='product/category']").contains("Makeup").click()
        cy.selectProduct("Tropiques Minerale Loose Bronzer")

    });
});