/// <reference types="cypress" />
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

    it('Validate product thumbnails', () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as("productThumbnails")
        //Here we are finding all divs and assert that they are 16 total
        cy.get("@productThumbnails").should("have.length", 16)
        // We are invoking the attibure of title that should include the text Add to Cart
        cy.get("@productThumbnails").find(".productcart").invoke("attr", "title").should("include", "Add to Cart")
    });

    it.only('Validate product thumbnails', () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".thumbnail").as("productThumbnails")
        //Here we are finding all regular prices
        // cy.get("@productThumbnails").find(".oneprice").each(($el, index, $list) =>{
        //     cy.log($el.text())
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    
    var itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale price items total: " + itemsPriceTotal)
    })

    cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < saleItemPrice.length; i++) {
            cy.log(saleItemPrice[i])
            saleItemsPrice += Number(saleItemPrice[i])
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price items total: " + saleItemsPrice)
    })
    .then(() => {
        cy.log("The total price of all products: " + itemsTotal)
        expect(itemsTotal).to.equal(676.1)
    })
  });
});