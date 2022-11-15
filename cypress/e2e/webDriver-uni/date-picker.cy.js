/// <reference types="Cypress" />

describe("Hnadling datepicker", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
      cy.url("Datepicker");
      cy.title("WebDriver | Datepicker");
    });
    it("Selecting dates from a particular datepicker", () => {
        cy.get("#datepicker").click()

        var date = new Date();
        date.setDate(date.getDate() + 90);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
  });
  