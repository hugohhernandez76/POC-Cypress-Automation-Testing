/// <reference types="cypress" />
describe("Handlinng Dropdown List", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.title("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)");
  });
  it("Selecting an options from the dropdown list", () => {
    cy.get("#dropdowm-menu-1").select("C#")
    //We are asserting the value
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng")
    //Asserting with text
    cy.get("#dropdowm-menu-3").select("JavaScript").contains("JavaScript")
  });
});
