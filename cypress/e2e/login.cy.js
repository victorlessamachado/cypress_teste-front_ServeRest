describe('Realizar login com sucesso', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('/login')

   cy.get('[data-testid="email"]').type('usuario@teste.com')
   cy.get('[data-testid="senha"]').type('senha123')
   cy.get('[data-testid="entrar"]').click()
   cy.contains( 'Bem Vindo').should('be.visible')
  })
})