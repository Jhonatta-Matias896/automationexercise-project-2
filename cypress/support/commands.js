
const elements = require('../support/Elementos/globalElements').ELEMENTS


Cypress.Commands.add('login', (email, password) => {

    cy.get(elements.loginCampoEmail).type(email)
    cy.get(elements.loginCampoSenha).type(password)
    cy.get(elements.btnLogin).click()

});

Cypress.Commands.add('logout', () => {
    cy.login(Cypress.env('email01'), Cypress.env('senhaUsuario'))
    cy.contains(Cypress.env('usuario01')).should('be.visible')
    cy.contains("Logout").click()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}login`)
    cy.contains(Cypress.env('usuario01')).should('not.exist');
});