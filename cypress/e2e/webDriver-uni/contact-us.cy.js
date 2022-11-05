import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  const contact_Us_PO = new Contact_Us_PO();
  const homePage_PO = new HomePage_PO();
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    homePage_PO.visitWebDriverUni();
    homePage_PO.clickOnContactUsLink();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contact_Us_PO.contactSubmissionForm(
      data.first_name,
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contact_Us_PO.contactSubmissionForm(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
