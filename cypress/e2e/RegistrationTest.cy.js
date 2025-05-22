describe('registration functionality',()=>{
it('reg user',()=>{
  cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  cy.get('#loginPanel > p:nth-child(3) > a').click()
  cy.get("input[id='customer.firstName']").type('Wright')
  cy.get("input[id='customer.lastName']").type('Adebayo')
  cy.get("input[id='customer.address.street']").type('iwalewa street')
  cy.get("input[id='customer.address.city']").type('Akure')
  cy.get("input[id='customer.address.state']").type('ikogosi')
  cy.get("input[id='customer.address.zipCode']").type('1345')
 
  cy.get("input[id='customer.phoneNumber']").type('08144395255')
  cy.get("input[id='customer.ssn']").type('222')
  cy.get("input[id='customer.username']").type('yousef')
  cy.get("input[id='customer.password']").type('computer20')
  cy.get('#repeatedPassword').type('computer20')
  cy.get('[colspan="2"] > .button').click()
})
})