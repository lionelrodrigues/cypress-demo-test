import Home from "../../src/pages/Home"

describe('homescreen.cy.js', () => {
  it('should show  welcome and like for redirection', () => {

    cy.mount(<Home.js />)
    // cy.get('h1').should('contain', 'h1')
  })
})