/// <reference types="cypress" />
describe("Handlinng Alerts", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
  });
  it("Confirm Correct Text Alert", () => {
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.url().should("include", "Popup-Alerts");
    //Validating I landed in the correct page so I extracted the text to confirm the page.
    cy.xpath("//div[@id='main-header']/h1").then(($alertsPage) => {
      const validateAlertsPage = $alertsPage.text();
      expect(validateAlertsPage).to.eq("Annoying Popup & Alerts!");
    });
    cy.get("#button1").click();
    //asserting text in the the alert box
    cy.on("window:alert", (str) => {
      expect(str).to.eq("I am an alert box!");
    });
  });

  it("Confirm I have clicked the OK button", () => {
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.url().should("include", "Popup-Alerts");
    //Validating I landed in the correct page so I extracted the text to confirm the page.
    cy.xpath("//div[@id='main-header']/h1").then(($alertsPage) => {
      const validateAlertsPage = $alertsPage.text();
      expect(validateAlertsPage).to.eq("Annoying Popup & Alerts!");
    });
    cy.get("#button4").click();
    //asserting text in the the alert box
    cy.on("window:confirm", (str) => {
        //user true to select OK on the alert or user false to select cancel
        return true; 
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!")

  });

  it.only("Confirm I have clicked the Cancel button", () => {
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.url().should("include", "Popup-Alerts");
    //Validating I landed in the correct page so I extracted the text to confirm the page.
    cy.xpath("//div[@id='main-header']/h1").then(($alertsPage) => {
      const validateAlertsPage = $alertsPage.text();
      expect(validateAlertsPage).to.eq("Annoying Popup & Alerts!");
    });
    cy.get("#button4").click();
    //using window:confirm allows you to either select or cancel
    cy.on("window:confirm", (str) => {
        //user true to select OK on the alert or user false to select cancel
        return false; 
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!")

  });
});
