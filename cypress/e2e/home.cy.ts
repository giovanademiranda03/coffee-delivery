describe('Coffee Delivery', () => {
  it('Passou Uhuu!', () => {
    cy.visit('/home')
    cy.dataCy('logo').click()
    cy.dataCy('plus').eq(1).click()
    cy.dataCy('minus').eq(1).click()
    cy.dataCy('add-cart').eq(1).click()
    cy.dataCy('cart').click()

    cy.location('pathname').should('equal', '/checkout')
    cy.dataCy('cep').type('18021310')
    cy.dataCy('rua').click()
    cy.dataCy('numero').type('123')
    cy.dataCy('complemento').type('apto 123')

    cy.dataCy('dinheiro').click()

    cy.dataCy('plus-btn').click()
    cy.dataCy('minus-btn').click()
    cy.dataCy('remover-btn').click()
    cy.dataCy('confirmar-btn').click()

    cy.location('pathname').should('equal', '/success')
    cy.dataCy('cart').click()
    cy.dataCy('logo').click()
  })
})