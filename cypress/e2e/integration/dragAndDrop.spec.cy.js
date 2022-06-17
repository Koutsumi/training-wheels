describe('manipulando drag and drop', () =>{

    before(() => {
        cy.visit('/drag_and_drop');
    })
    it('deve pegar o elemento cypress', () => {

        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Cypress"]')
            .trigger('dragstart', {dataTransfer});
        
        cy.get('.nodejs figure[draggable="true"]')
            .trigger('drop', {dataTransfer});
    })

    it('deve pegar o elemento robot', () => {

        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Robot Framework"]')
            .trigger('dragstart', {dataTransfer});
        
        cy.get('.python figure[draggable="true"]')
            .trigger('drop', {dataTransfer});
    })
})