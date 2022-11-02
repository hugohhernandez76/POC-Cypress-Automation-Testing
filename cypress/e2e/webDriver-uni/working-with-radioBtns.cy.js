/// <reference types="cypress" />
describe("Handlinng Radio BTNS", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#dropdown-checkboxes-radiobuttons")
        .invoke("removeAttr", "target")
        .click();
        cy.title("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)");
    });
    it('Selecting Radio Buttons', () => {
        //Using aliases to re-use code
        cy.get("[id='radio-buttons']").find("[type='radio']").as('radioBtns')
        cy.get("@radioBtns").eq(0).check().should("be.checked")
    });
    it.only('Selected & Disabled', () => {
        cy.get("[id='radio-buttons-selected-disabled']").find("[value='lettuce']").should("not.be.checked")
        cy.get("[id='radio-buttons-selected-disabled']").find("[value='cabbage']").should("not.be.checked")
        cy.get("[id='radio-buttons-selected-disabled']").find("[value='pumpkin']").should("be.checked")
        
    });
});