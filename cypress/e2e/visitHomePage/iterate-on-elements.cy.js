
describe('Iterate over elements', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
      });
    it('Selecting a particular element ', () => {
        cy.get("a[href*='product/category']").contains("Makeup").click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) =>{
            if ($el.text().includes("Product with stock locations")) {
                cy.wrap($el).click()
                
            }
        })

    });
});