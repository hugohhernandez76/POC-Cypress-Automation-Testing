/// <reference types="Cypress" />

describe("Hnadling data from tables", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    cy.url("Data-Table");
    cy.title("WebDriver | Data Tables");
  });
  it("Calculate and assert the total age of all users", () => {
    let userDetails = [];
    let totalAge = 0;

    cy.get("#thumbnail-1 td")
      .each(($el) => {
        userDetails.push($el.text());
      })
      .then(() => {
        for (let data of userDetails) {
          if (Number(data)) {
            totalAge += Number(data);
          }
        }
        expect(totalAge).to.equal(322);
      });
  });
  it("Selecting a particular user from second column", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const myText = $el.text();
      if (myText.includes("Wood")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index) //gets the indext instead of the name
          .next() // goes to the next cell which is the age
          .then(function (age) {
            const usrAge = age.text()
            expect(usrAge).to.equal("80")
          });
      }
    });
  });
});
