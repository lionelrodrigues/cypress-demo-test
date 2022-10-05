describe('home screen', () => {
  it('show user login and sign up routes and redirect', () => {
    cy.visit('http://localhost:3000/')
      .get('h1').should('have.text', 'WELCOME - Home Page')
      .get('a[href*=login]').click()

    cy.get('input#login-email').type('lionelmelrick@gmail.com')
    cy.get('input#login-password').type('123@123')
    cy.get('button#login-btn').click()

    cy.intercept('POST', 'http://localhost:3040/login', {
      statusCode: 200, body: {
        message: 'sucess'
      }
    })

  })
})