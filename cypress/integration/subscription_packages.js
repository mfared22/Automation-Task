
describe('Subscription Packages', () => {
  it('Validate Subscription Packages', () => {
    cy.visit('https://subscribe.stctv.com/')

    // Validate Saudi Arabia subscription package
    cy.get('.SA .subscription-type').should('have.text', 'Saudi Arabia')
    cy.get('.SA .subscription-price').should('have.text', '12.00')
    cy.get('.SA .subscription-currency').should('have.text', 'SAR')

    // Validate Kuwait subscription package
    cy.get('.KW .subscription-type').should('have.text', 'Kuwait')
    cy.get('.KW .subscription-price').should('have.text', '9.00')
    cy.get('.KW .subscription-currency').should('have.text', 'KWD')

    // Validate Bahrain subscription package
    cy.get('.BH .subscription-type').should('have.text', 'Bahrain')
    cy.get('.BH .subscription-price').should('have.text', '8.00')
    cy.get('.BH .subscription-currency').should('have.text', 'BHD')
  })
})
