describe('manipulando radio buttons', () =>{
    it('deve marcar um radio button', () => {
        cy.visit('/radios');

        cy.get('input[value="capmarvel"]')
            .check()
                .should('be.checked');
    })
})