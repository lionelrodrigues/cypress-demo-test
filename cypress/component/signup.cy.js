// import Home from "../../src/pages/Home";
import Navigation from './Navigation'

describe('homescreen.cy.js', () => {
    it('creates a user in sign up page', () => {
        cy.mount(<Navigation />)
            .get('a[href*="signup"]').click()
    })
})