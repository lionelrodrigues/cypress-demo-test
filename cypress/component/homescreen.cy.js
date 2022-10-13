// import Home from "../../src/pages/Home";
import Navigation from './Navigation'

describe('homescreen.cy.js', () => {
  it('should show  welcome and LOGIN for redirection', () => {

    cy.mount(<Navigation />)
    cy.get('h1').should('contain.text', 'WELCOME - Home Page')
    cy.get('a[href*="/login"]').click()
    cy.window().then((win) => {
      console.log(win.location)
    })
  })
})