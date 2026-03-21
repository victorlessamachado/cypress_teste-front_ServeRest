describe('Cadastro de e-mail já existente', () => {
  it('Tentar cadastrar e-mail já existente', () => {
    cy.visit('/login')

    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Usuário Teste')
    cy.get('[data-testid="email"]').type('usuario@teste.com')
    cy.get('[data-testid="password"]').type('senha123')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Este email já está sendo usado')
  })
  it('Tentar cadastrar com os campos e-mail e senha vazios', () => {
    cy.visit('/cadastrarusuarios')

   cy.get('[data-testid="nome"]').type('Usuário Teste')
   cy.get('[data-testid="checkbox"]').check()
  cy.get('[data-testid="cadastrar"]').click()
   cy.contains('Email é obrigatório').should('be.visible')
  cy.contains('Password é obrigatório').should('be.visible')
})
it('Tentar cadastrar com e-mail inválido', () => {
    cy.visit('/cadastrarusuarios')
 cy.get('[data-testid="nome"]').type('Usuário Teste')
  cy.get('[data-testid="email"]').type('victor@gmail.comgh') // inválido
  cy.get('[data-testid="password"]').type('senha123')

  cy.get('[data-testid="checkbox"]').check()
  cy.get('[data-testid="cadastrar"]').click()

  cy.contains('Email deve ser um email válido').should('be.visible')
    
})
})