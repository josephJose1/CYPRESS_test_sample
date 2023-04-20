describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

/*
Once you save again, you'll see Cypress display the failing test in red since true does 
not equal false.
Cypress also displays the stack trace and the code frame where the assertion failed 
*/