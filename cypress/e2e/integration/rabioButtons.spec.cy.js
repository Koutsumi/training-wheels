describe('manipulando radio buttons', () =>{
    it('deve marcar um radio button', () => {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/radios');

        cy.get('input[value="capmarvel"]')
            .check()
                .should('be.checked');
    })
})