describe('spec to stub the todo api', () => {
    it('api intercept stubbing', () => {

        cy.visit('https://jsonplaceholder.typicode.com/', { "chromeWebSecurity": false })

        cy.intercept({
            path: '/todos'

        }).as('todos')

        cy.get(":nth-child(5) > :nth-child(1) > a").click()
        cy.wait('@todos').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(200)

        })


    })

})