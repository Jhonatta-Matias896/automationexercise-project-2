
const faker = require('faker-br')
const elements = require('../../../support/Elementos/globalElements').ELEMENTS


describe('Teste válidos na tela de cadastro', ()=>{
beforeEach(() => {
    cy.visit('/login')
});
    Cypress._.times(3,()=>{
        it.only('Teste 01: Cadastro com sucesso', ()=>{
            const nomeUsuario = faker.name.firstName()   
            cy.get(elements.campoNome).type(nomeUsuario)
            cy.get(elements.campoEmail).type(faker.internet.email(nomeUsuario))
            cy.get('[data-qa="signup-button"]').click()
            cy.contains('Enter Account Information').should('be.visible')
            cy.get('#id_gender1').click()
            cy.get('[data-qa="password"]').type(Cypress.env('senhaUsuario'))
            cy.get('[data-qa="days"]').select('20')
            cy.get('[data-qa="months"]').select('June')
            cy.get('[data-qa="years"]').select('2021')
            cy.get('input[type="checkbox"]').check().should('be.checked')
            cy.get('[data-qa="first_name"]').type(Cypress.env('usuario01'));
            cy.get('[data-qa="last_name"]').type(Cypress.env('usuario01'))
            cy.get('[data-qa="company"]').type('enverga')
            cy.get('[data-qa="address"]').type('mãe joana')
            cy.get('[data-qa="country"]').select('Canada')
            cy.get('[data-qa="state"]').type('CA')
            cy.get('[data-qa="city"]').type('joana')
            cy.get('[data-qa="zipcode"]').type('109876543210')
            cy.get('[data-qa="mobile_number"]').type('012345678910')
            cy.get('[data-qa="create-account"]').click()
            cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
            cy.get('[data-qa="continue-button"]').click()
            cy.get('b').should('have.text', nomeUsuario)
                       
       });

    })

    it('Teste 01: Cadastro com sucesso', ()=>{
        const nomeUsuario = faker.name.firstName()
        faker.internet.email()

        cy.get(elements.campoNome).type(nomeUsuario)
        cy.get(elements.campoEmail).type(faker.internet.email(nomeUsuario))
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Enter Account Information').should('be.visible')
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type(Cypress.env('senhaUsuario'))
        cy.get('[data-qa="days"]').select('20')
        cy.get('[data-qa="months"]').select('June')
        cy.get('[data-qa="years"]').select('2021')
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('[data-qa="first_name"]').type(Cypress.env('usuario01'));
        cy.get('[data-qa="last_name"]').type(Cypress.env('usuario01'))
        cy.get('[data-qa="company"]').type('enverga')
        cy.get('[data-qa="address"]').type('mãe joana')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('CA')
        cy.get('[data-qa="city"]').type('joana')
        cy.get('[data-qa="zipcode"]').type('109876543210')
        cy.get('[data-qa="mobile_number"]').type('012345678910')
        cy.get('[data-qa="create-account"]').click()
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('b').should('have.text', nomeUsuario)
        
        
   });

   it('Teste 02: Verifica se o cadastro foi concluído com sucesso', () => {
    cy.get('[data-qa="login-email"]').type(Cypress.env('email01'))
    cy.get('[data-qa="login-password"]').type(Cypress.env('senhaUsuario'))
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('have.visible', Cypress.env('usuario01'))
     });

     it('', () => {
        
     });





});