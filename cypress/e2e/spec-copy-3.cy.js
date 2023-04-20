describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('scrollTo')
  })
})

//Step 2: Query for an element

/* Our test should now display CONTAINS in the Command Log and still be green.

Even without adding an assertion, we know that everything is okay! 
This is because many of Cypress' commands are built to fail if they 
don't find what they're expecting to find. This is known as a Default Assertion.
*/