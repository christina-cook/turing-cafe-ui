describe('Turing Cafe Reservations', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseURL)
  })

  it.only('Should display the app\'s name at the top of the page', () => {
    cy.get('h1').should('contain', 'Turing Cafe Reservations')
  })

  it('Should display a form for a user to make a reservation', () => {

  })

  it('Should display all existing reservations below the form', () => {

  })
})
