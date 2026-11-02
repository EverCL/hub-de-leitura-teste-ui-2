describe('funcionalidade: login', () => {
  it('Deve preencher os campos de login', () => {
   
   cy.visit('http://localhost:3000/login.html')
   cy.get('#email').type("everaldoclc@gmail.com")
  cy.get('#password').type("ander$ever")
  })

})

