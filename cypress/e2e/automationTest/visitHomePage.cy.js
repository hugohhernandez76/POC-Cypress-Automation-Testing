/// <reference types="cypress" />
describe("Visit the homepage", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });
  it("click the login option", () => {
    cy.xpath("(//li[contains(text(),login)])[1]").click();
    cy.xpath("//div[@class='col-md-12 col-xs-12 mt20']/div/h1/span[1]").then(
      ($loginPage) => {
        const validateLoginPage = $loginPage.text();
        cy.log("I have landend on page " + validateLoginPage);
        expect(validateLoginPage).to.eq(" Account Login");
        //CSS
        cy.get("a[href*='product/category']")
          .contains(" Books")
          .click()
          .then(($availableBooks) => {
            const booksPage = $availableBooks.text();
            cy.log("Landed on " + booksPage + " Page");
            expect(booksPage).to.eq("Books");
          });
      }
    );
  });
});
