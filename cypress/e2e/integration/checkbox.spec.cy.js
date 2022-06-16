describe('manipulando checkbox', () => {
    it('deve marcar o top 5 filmes da marvel', () => {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes');

        const movies = [
            'avengers',
            'guardians',
            'strange',
            'blackpanther',
            'avengers3'
        ]

        movies.forEach( (index) =>{
            cy.get(`input[name="${index}"]`)
            .check()
                .should('be.checked');
        })
        
    })
})