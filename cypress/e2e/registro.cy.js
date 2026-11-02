///<reference types="cypress"/>

describe("funcionalidade: pré-cadastro", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register.html");
  });

  it("Deve preencher os campos de cadastro", () => {
    cy.get("#name").type("Everaldo Carlos");
    cy.get("#email").type("everaldocl1c@gmail.com");
    cy.get("#phone").type("33999215508");
    cy.get("#password").type("ander$ever");
    cy.get("#confirm-password").type("ander$ever");
    cy.get(".form-check-label").click();
    cy.get("#register-btn").click();
  });


  it.only("Deve validar mensagem de erro ao enviar sem preencher o nome", () => {
   cy.visit("register.html");
     //cy.get("#name").type("Everaldo Carlos");
     cy.get("#name").clear();
    cy.get("#email").type("everaldocl2c@gmail.com");
    cy.get("#phone").type("33999215508");
    cy.get("#password").type("ander$ever");
    cy.get("#confirm-password").type("ander$ever");
    cy.get(".form-check-label").click();
    cy.get("#register-btn").click();
    cy.get("#terms-agreement").check();
    cy.get("#alert-container").should(
      "contain",
      "Nome deve ter pelo menos 2 caracteres",
    );
 
  });
});
