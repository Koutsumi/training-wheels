describe('testeando hooks', () => {
    before(() =>{
        cy.log('Roda antes de todos os testes')
    })

    beforeEach(() =>{
        cy.log('Roda antes em todos os testes')
    })
    it('teste 1', () => {
        cy.log('testando teste 1')
    })

    it('teste 2', () => {
        cy.log('testando teste 2')
    })

    afterEach(() =>{
        cy.log('roda depois de cada testes')
    })

    after(() =>{
        cy.log('roda depois de todos os testes')
    })
})