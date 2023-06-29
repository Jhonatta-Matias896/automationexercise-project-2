const elements = require('../../../support/Elementos/globalElements').ELEMENTS

describe('Testes na tela de login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('Teste 01: Tentativa de login com senha inválida', () => {
        cy.login(Cypress.env('email01'), ' ')
        cy.contains(elements.msgErrorLogin).should('be.visible')

    });
    it('Teste 02: Tentativa de login com email inválido', () => {
        cy.login('wasd@wasd.cim', Cypress.env('senhaUsuario'))
        cy.get(elements.msgErrorEmailorSenha).should('have.text', elements.msgErrorLogin)
        
    });
});

































// //TESTE COM RESULTADO FALSO-POSITIVO
    
    // it.only('Teste: Capturar input com alerta de e-mail faltando @', () => {
    //     cy.login(Cypress.env('emailSem@'), Cypress.env('senhaUsuario'));
      
    //     cy.contains('Inclua um "@" no endereço de e-mail."')
    //       .siblings('input[type="email"][data-qa="login-email"]')
    //       .as('emailInput');
      
    //     cy.get('@emailInput')
    //       .should('exist')
    //       //.type('example.com'); // Exemplo de preenchimento do input
    //   });
      
      
      
        // const msg2 = '" não contém um @.';
        //cy.contains(textoElemento).should('be.visible');
        
        //const mensagemCompleta = `${msg + Cypress.env('emailSem@') + msg2}`;
      











//     it.only('Teste 04: Tentativa de login com email mal formatado', () => {
//         const msg = 'Inclua um "@" no endereço de e-mail."'
//         const msg2 = '" está com um "@" faltando.'
//         cy.login(Cypress.env('emailSem@'),Cypress.env('senhaUsuario'))
//         cy.get('input[type="email"][data-qa="login-email"]')
//   .trigger('mouseover')
//   .then((msgAlert) => {
//     cy.contains(msgAlert).should('be.eq', `${msg + Cypress.env('emailSem@') + msg2}}` )

    
//   });
    

//     });




  // cy.get('.login-email').invoke('show').should('have.text', `${msg + Cypress.env('emailSem@') + msg2}}`)
       
        //input[type="email"][data-qa="login-email"]