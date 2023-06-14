const elements = require('../../../support/Elementos/globalElements').ELEMENTS

describe('Testes na tela de login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Teste 01: Login com sucesso ', () => {
        cy.login(Cypress.env('email01'), Cypress.env('senhaUsuario'))
        cy.contains(Cypress.env('usuario01')).should('be.visible')

    });
    it('Teste 02: Tentativa de login com senha inválida', () => {
        cy.login(Cypress.env('email01'), ' ')
        cy.contains(elements.msgErrorLogin).should('be.visible')

    });
    it('Teste 03: Tentativa de login com email inválido', () => {
        cy.login('wasd@wasd.cim', Cypress.env('senhaUsuario'))
        cy.get(elements.msgErrorEmailorSenha).should('have.text', elements.msgErrorLogin)
        
    });
    //TESTE COM RESULTADO FALSO-POSITIVO
    it('Teste 04: Tentativa de login com email mal formatado', () => {
        cy.login(Cypress.env('emailSem@'),Cypress.env('senhaUsuario'))
        cy.get('input[type="email"][data-qa="login-email"]').invoke('show')
        

    });


});