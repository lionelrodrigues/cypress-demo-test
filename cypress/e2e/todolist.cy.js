describe("Todo test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/dashboard')
    })
    it('add to list', () => {
        cy.clock()

        cy.get('#todo-input').type('red')
        cy.tick(12000000)
        cy.get('#todo-btn').click()
        cy.get('#todo-input').should('have.value', '')
        cy.get('li').should(($list) => {
            expect($list.eq(0)).to.contain('red')
        })
    })

    //fixtures
    it('add to list from fixtures ', () => {
        cy.fixture('todo').then(data => {
            data.forEach((element, index) => {
                cy.get('#todo-input').type(element)
                cy.get('#todo-btn').click()
                cy.get('li').should(($list) => {
                    expect($list.eq(index)).to.contain(element)
                })
            });
        })

    })
    it('remove list from fixtures ', () => {
        cy.fixture('todo').then(data => {
            data.forEach((element, index) => {
                cy.get('#todo-input').type(element)
                cy.get('#todo-btn').click()
                cy.get('li').should(($list) => {
                    expect($list.eq(index)).to.contain(element)
                })
            });
        })

    })

})

