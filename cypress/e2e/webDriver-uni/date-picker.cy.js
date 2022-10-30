/// <reference types="Cypress" />

describe("Hnadling datepicker", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
      cy.url("Datepicker");
      cy.title("WebDriver | Datepicker");
    });
    it("Selecting dates from a particular datepicker", () => {
        // let date = new Date() //creating an object
        // date.setDate(date.getDate()) //this will get the current date
        // cy.log(date.getDate())

        // let date2 = new Date()
        // date2.setDate(date2.getDate() + 5)
        // cy.log(date2.getDate())
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
  