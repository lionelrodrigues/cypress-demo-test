describe("auth test",()=>{
  it('login flow',()=>{
    cy.visit('http://localhost:3000/')
       .get('h1').contains('WELCOME')

    cy.visit('http://localhost:3000/login')
    .get('input#login-email')
    .type('lionelmelrick@gmail.com')
    
    .get('input#login-password')
    .type('123@123')
  })

})