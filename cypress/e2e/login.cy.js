// Esse comando indica para o Cypress que eu vou usar os comandos dele
/// <reference types="cypress"/>


//funcionalidades - suite de testes
describe("Login", () => {

    // beforeEach executa um bloco de código, antes de cada teste, dentro de um describe
    beforeEach(() => {

        // cy.viewport é usada para testar em outros tamanhos de tela
        cy.viewport("iphone-8");
    });

    //cenario - caso de teste
    it("Login com sucesso", () => {

        //Abrir a aplicação
        cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php");

        //Preencher o e-mail
        cy.get(':nth-child(2) > td > input').type("sergiocouter@gmail.com");

        //Preencher a senha
        cy.get(':nth-child(4) > td > input').type("Arthur@22");

        //Preencher o nome
        cy.get(':nth-child(6) > td > input').type("Sérgio Couter")

        // Clicar em entrar
        cy.get('.btn-info').click();

        //Apagar Cadastro
        cy.get(':nth-child(2) > :nth-child(5) > a').click();
    });

    //cenario - caso de teste
    it("E-mail inválido", () => {
        cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php");
        cy.get(':nth-child(2) > td > input').type("sergiocoutergmail.com");
        cy.get(':nth-child(4) > td > input').type("senha@22");
        cy.get(':nth-child(6) > td > input').type("Serjão");
        cy.get('.btn-info').click();
        cy.get(':nth-child(2) > :nth-child(5) > a').click();

        // cy.get(':nth-child(2) > :nth-child(5) > a').should('have.text', 'E-mail inválido');

    });

    //cenario - caso de teste
    it("Senha Inválida", () => {
        cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php");
        cy.get(':nth-child(2) > td > input').type("sergiocouter@gmail.com");
        cy.get(':nth-child(4) > td > input').type("senha@22");
        cy.get(':nth-child(6) > td > input').type("Serjão");
        cy.get('.btn-info').click();
        cy.get(':nth-child(2) > :nth-child(5) > a').click();

        // cy.get(':nth-child(2) > :nth-child(5) > a').should('have.text', 'Senha inválida');
    });

    //cenario - caso de teste
    it("E-mail e senha vazios", () => {
        cy.visit("http://www.aprendendotestar.com.br/treinar-automacao.php");
        cy.get(':nth-child(2) > td > input').type(" ");
        cy.get(':nth-child(4) > td > input').type(" ");
        cy.get(':nth-child(6) > td > input').type(" ");
        cy.get('.btn-info').click();
        cy.get(':nth-child(2) > :nth-child(5) > a').click();

        // cy.get(':nth-child(2) > :nth-child(5) > a').should('have.text', 'Preencha os campos de e-mail e senha');

    });
});
