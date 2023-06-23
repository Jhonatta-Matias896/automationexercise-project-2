// const elements = require ('../../../support/Elementos/globalElements').ELEMENTS
describe('Realização de logout com sucesso', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    // DEPOIS REFATORAR COMANDO DE LOGIN COM CY.SESSION
    it('Teste 01: Logout', () => {
        cy.login(Cypress.env('email01'), Cypress.env('senhaUsuario'))
        cy.contains(Cypress.env('usuario01')).should('be.visible')
        cy.contains("Logout").click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}login`)
    });
    
});



