
describe('Alias and Invoke', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
      });
    it('Validate specific Hair product', () => {
        cy.get("a[href*='product/category']").contains("Hair Care").click()
        //We are selecting the first element and extracting the text with invoke and save it as firstProduct
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("firstProduct")
        cy.get("@firstProduct").its("length").should("be.gt", 5)
        cy.get('@firstProduct').should("include", "Seaweed Conditioner")


        

    });
});