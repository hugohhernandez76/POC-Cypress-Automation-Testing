/// <reference types="cypress" />
describe('Iterate over elements', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
      });
    it('Selecting a particular element ', () => {
        cy.get("a[href*='product/category']").contains("Makeup").click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) =>{
            cy.log($el.text())
            if ($el.text().includes("Product with stock locations")) {
                cy.wrap($el).click()
                
            }
        })

    });
});