/// <reference types="cypress" />
describe('JSON objects', () => {
    it('JSON object examples', () => {
        const exampleObject = {"key": "Dan", "key2": "Porter"}
        cy.log(exampleObject["key"])
        cy.log(exampleObject["key2"])

        const user = {
            "firstName": "Peter",
            "lastname": "Jones",
            "age": 35,
            "Students":[
                {
                    "firstName": "Mark",
                    "lastName": "Storm",
                    "age": 18
                },
                {
                    "firstName": "Spencer",
                    "lastName": "White",
                    "age": 34
                }
            ]
        }
        cy.log(user.Students[1].firstName)
    });
});