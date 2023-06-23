
const faker = require('faker-br')
const elements = require('../../../support/Elementos/globalElements').ELEMENTS


describe('Teste válidos na tela de cadastro', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    Cypress._.times(1, () => {
        it.only('Teste 01: Cadastro com sucesso', () => {
            const nomeUsuario = faker.name.firstName()
            cy.get(elements.campoNome).type(nomeUsuario)
            cy.get(elements.campoEmail).type(faker.internet.email(nomeUsuario))
            cy.get(elements.btnSingUp).click()
            cy.contains(elements.msgDeCadastro).should('be.visible')
            cy.get(elements.tituloGenero).click()
            cy.get(elements.campoSenha).type(Cypress.env('senhaUsuario'))
            cy.get(elements.diaNascimento).select('20')
            cy.get(elements.mesNascimento).select('June')
            cy.get(elements.anoNascimento).select('2021')
            cy.get(elements.checkBoxe).check().should('be.checked')
            cy.get(elements.primeiroNome).type(faker.name.firstName());
            cy.get(elements.ultimoNome).type(faker.name.lastName())
            cy.get(elements.nomeEmpresa).type(faker.company.companyName())
            cy.get(elements.nomeRua).type(faker.address.streetName())
            cy.get(elements.nomePais).select([1])
            cy.get(elements.nomeEstado).type(faker.address.state())
            cy.get(elements.nomeCidade).type(faker.address.city())
            cy.get(elements.cep).type(faker.address.zipCode())
            cy.get(elements.numeroTelefone).type(faker.phone.phoneNumber())
            cy.get(elements.btnCriarConta).click()
            cy.contains(elements.msgDeContaCriada).should('be.visible')
            cy.get(elements.btnContinuar).click()
            cy.get(elements.verificacaoDeNomeUsuario).should('have.text', nomeUsuario)

        });

    })

    it('Teste 02: Cadastro com sucesso(ALTERNATIVO)', () => {
        const nomeUsuario = faker.name.firstName()
        faker.internet.email()

        cy.get(elements.campoNome).type(nomeUsuario)
        cy.get(elements.campoEmail).type(faker.internet.email(nomeUsuario))
        cy.get(elements.btnSingUp).click()
        cy.contains(elements.msgDeCadastro).should('be.visible')
        cy.get(elements.tituloGenero).click()
        cy.get(elements.campoSenha).type(Cypress.env('senhaUsuario'))
        cy.get(elements.diaNascimento).select('20')
        cy.get(elements.mesNascimento).select('June')
        cy.get(elements.anoNascimento).select('2021')
        cy.get(elements.checkBoxe).check().should('be.checked')
        cy.get(elements.primeiroNome).type(Cypress.env('usuario01'));
        cy.get(elements.ultimoNome).type(Cypress.env('usuario01'))
        cy.get(elements.nomeEmpresa).type('enverga')
        cy.get(elements.nomeRua).type('mãe joana')
        cy.get(elements.nomePais).select('Canada')
        cy.get(elements.nomeEstado).type('CA')
        cy.get(elements.nomeCidade).type('joana')
        cy.get(elements.cep).type('109876543210')
        cy.get(elements.numeroTelefone).type('012345678910')
        cy.get(elements.btnCriarConta).click()
        cy.contains(elements.msgDeContaCriada).should('be.visible')
        cy.get(elements.btnContinuar).click()
        cy.get(elements.verificacaoDeNomeUsuario).should('have.text', nomeUsuario)


    });

    it('Teste 03: Verifica se o cadastro foi concluído com sucesso', () => {
        cy.get(elements.loginCampoEmail).type(Cypress.env('email01'))
        cy.get(elements.loginCampoSenha).type(Cypress.env('senhaUsuario'))
        cy.get(elements.btnLogin).click()
        cy.get(':nth-child(10) > a').should('have.visible', Cypress.env('usuario01'))
    });

    it('', () => {

    });





});