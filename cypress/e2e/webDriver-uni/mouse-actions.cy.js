/// <reference types="cypress" />
describe('Working with mouse actios', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
        cy.title("WebDriver | Actions");
      });
    it('Scroll element into view', () => {
        //we click and hold down on the element
        cy.get("#draggable").trigger("mousedown", {which: 1})
        //we drop the element on the droppable area.
        cy.get("#droppable").trigger("mousemove").trigger("mouseup", {force: true}) 
    });
    it.only('Click and hold mouse to validate change of color', () => {
        cy.xpath("//div[@id='click-box']").trigger("mousedown", {which: 1}).then(($element) => {
            expect($element).to.have.css("background-color", "rgb(0, 255, 0)")
        })
    });
});