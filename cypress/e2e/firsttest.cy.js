describe('launch application', () => {
  it('launch the test application', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("input[name='username']").type('test')
    cy.get("input[name='password']").type('test')
  })
})

// describe('login test scenario', () => {
//   it('test 1 - valid login', () => {
    
//   })
//   it('test 2 - invalid login', () => {
  
//   })
// })