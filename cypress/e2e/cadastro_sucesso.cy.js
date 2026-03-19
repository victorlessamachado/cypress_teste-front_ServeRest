describe('Cadastro de Usuário', () => {
  it('Cadastro com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    const email = `usuario${Date.now()}@exemplo.com`

    cy.get('[data-testid="cadastrar"]').click()
    cy.get('h2').contains('Cadastro')
    cy.get('[data-testid="nome"]').type('Usuário Teste')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type('senha123')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
  })
})