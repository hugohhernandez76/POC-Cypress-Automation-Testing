import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO"
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    const homePage_PO = new HomePage_PO();
    homePage_PO.visitWebDriverUni();
    homePage_PO.clickOnContactUsLink();

  });

  it.only("Should be able to submit a successful submission via contact us form", () => {
    // cy.contactForm_submit(
    //   data.first_name,
    //   data.last_name,
    //   data.email,
    //   "How can I learn Cypress?",
    //   "h1",
    //   "Thank You for your Message!"
    const contact_Us_PO = new Contact_Us_PO();
    contact_Us_PO.contactSubmissionForm(data.first_name, data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!")
    
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.contactForm_submit(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
