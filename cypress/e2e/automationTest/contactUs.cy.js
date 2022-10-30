/// <reference types="cypress" />
describe("Access the contact us page", () => {
  before(function () {
    cy.visit("https://automationteststore.com/");
    cy.title("A place to practice your automation skills!");
  });
  before(function () {
    cy.fixture("userDetails").as("user");
  });

  it("Fill out form to contact us", () => {
    cy.get("a[href*='contact']").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.last_name);
      cy.get("#ContactUsFrm_email").type(user.email);
      cy.get("#ContactUsFrm_enquiry").type(user.notes);
    });

    cy.xpath("//button[@class='btn btn-primary lock-on-click']").click();
  });
});
