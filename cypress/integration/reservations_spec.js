describe('Turing Cafe Reservations', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should display the app\'s name at the top of the page', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservations')
  })

  it('Should display a form for a user to make a reservation', () => {
    cy.get('.reservation-form').should('be.visible')
  })

  it('Should display all existing reservations below the form', () => {
    cy.get('.reservation-card').should('be.visible')
  })

  it.only('Should be able to see user data displayed in the form\'s inputs', () => {
    cy.get('.name-input').type('Christina').should('have.value', 'Christina')
      .get('.date-input').type('10/27').should('have.value', '10/27')
      .get('.time-input').type('7:30').should('have.value', '7:30')
      .get('.number-input').type('2').should('have.value', '2')
  })
})
