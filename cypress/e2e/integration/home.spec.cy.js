describe('Teste da home page', () =>{
    it('deve axibir a home page', () => {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/');

        cy.title()
            .should('be.equal', 'Training Wheels | QAninja');
            
        cy.get('ul[class="menu-list"]')
            .should('be.visible');
    })
})