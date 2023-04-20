describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})

//Step 4: Make an assertion

/*
Let's make an assertion about something on the new page we clicked into. 
Perhaps we'd like to make sure the new URL is the expected URL. We can do
 that by looking up the URL and chaining an assertion to it with .should().
*/