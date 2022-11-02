/// <reference types="cypress" />
describe('Adding Items to the Cart', () => {
    before(function() {
        cy.fixture("mekeupProducts").then(function(data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category']").contains("Makeup").click()
      });
    it('Selecting a particular items and add them to cart ', () => {
        globalThis.data.products.forEach(function(element) {
            cy.addItemsToCart(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    });
    
});