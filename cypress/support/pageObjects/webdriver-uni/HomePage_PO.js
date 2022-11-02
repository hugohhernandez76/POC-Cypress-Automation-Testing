class HomePage_PO {
    visitWebDriverUni(){
        cy.visit(Cypress.env("DEV"));
    }
    clickOnContactUsLink(){
        cy.get("#contact-us").invoke("removeAttr", "target").click({force: true})
    }
}
export default HomePage_PO;