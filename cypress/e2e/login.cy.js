///<reference types="cypress"/>

describe("funcionalidade: login", () => {
  it("Deve preencher os campos de login", () => {
    cy.visit("login.html");
    cy.get("#email").type("everaldoclc@gmail.com");
    cy.get("#password").type("ander$ever");
    cy.get("#login-btn").click();
  });
});
