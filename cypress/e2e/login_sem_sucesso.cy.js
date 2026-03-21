describe('Realizar login com e-mail inválido', () => {
  it('Login com credenciais inválidas', () => {
    cy.visit('/login')

    cy.get('[data-testid="email"]').type('emailinvalido@gmail.combrt')
    cy.get('[data-testid="senha"]').type('senha123')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email deve ser um email válido').should('be.visible')

  })
   it('Login com senha inválida', () => {
    cy.visit('/login')

    cy.get('[data-testid="email"]').type('usuario@teste.com')
    cy.get('[data-testid="senha"]').type('senhainvalida')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')

})
it('Login com os campos e-m,ail e senha vazios ', () => {
    cy.visit('/login')
    
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Password é obrigatório').should('be.visible')
})
})