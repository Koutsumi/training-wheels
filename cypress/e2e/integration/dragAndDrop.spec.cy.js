describe('manipulando drag and drop', () =>{
    it('deve pegar o elemento cypress', () => {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop');

        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Cypress"]')
            .trigger('dragstart', {dataTransfer});
        
        cy.get('.nodejs figure[draggable="true"]')
            .trigger('drop', {dataTransfer});
    })

    it('deve pegar o elemento robot', () => {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop');

        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Robot Framework"]')
            .trigger('dragstart', {dataTransfer});
        
        cy.get('.python figure[draggable="true"]')
            .trigger('drop', {dataTransfer});
    })
})