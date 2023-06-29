// const elements = require ('../../../support/Elementos/globalElements').ELEMENTS
describe('Realização de logout com sucesso', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    // DEPOIS REFATORAR COMANDO DE LOGIN COM CY.SESSION
    it('Teste 01: Logout', () => {
        cy.logout();
    });

});



