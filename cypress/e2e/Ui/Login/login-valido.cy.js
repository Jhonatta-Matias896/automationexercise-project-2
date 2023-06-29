const elements = require('../../../support/Elementos/globalElements').ELEMENTS

describe('Testes na tela de login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Teste 01: Login com sucesso ', () => {
        cy.login(Cypress.env('email01'), Cypress.env('senhaUsuario'))
        cy.contains(Cypress.env('usuario01')).should('be.visible')

    });

});



