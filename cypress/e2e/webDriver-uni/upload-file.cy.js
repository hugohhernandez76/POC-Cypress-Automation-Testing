/// <reference types="Cypress" />
describe("Test Uploading files", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
      cy.url("File-Upload");
      cy.title("File Upload");
    });
    it("Uploading file", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
        cy.get("#submit-button").click();
    });

    it('Upload No file...', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    });
});
