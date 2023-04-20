// Adding more commands and assertions

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

/*We normally don't suggest selecting and finding elements by their class names, 
but we do so here since we are querying an external site, and sometimes that is 
all we have to work with. */

/*
    Visit: https://example.cypress.io
    Find the element with content: type
    Click on it
    Get the URL
    Assert it includes: /commands/actions
    Get the input with the action-email data-testid
    Type fake@email.com into the input
    Assert the input reflects the new value
*/