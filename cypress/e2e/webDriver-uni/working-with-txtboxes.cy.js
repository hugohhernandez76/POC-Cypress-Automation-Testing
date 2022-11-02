/// <reference types="cypress" />
describe("Handlinng Text Boxes, Radial Buttons and More", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
      cy.title("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)");
  });

  it("Selecting a checkbox and validating is checked", () => {
    cy.title("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)");
    cy.xpath("//input[@value='option-1']").check().should("be.checked");
  });

  it("Unselect a checkbox and validate it is unchecked", () => {
    //cy.xpath("//input[@value='option-3']").parent().as("checkBox3")
    cy.get(":nth-child(5) > input").as("checkBox3");
    cy.get("@checkBox3").uncheck().should("not.be.checked");
  });
  it("Selecting All Checkboxes", () => {
    cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"])
    .should("be.checked")
  });
});
