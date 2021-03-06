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
      .get('input:first').should('have.class', 'name-input')
      .get('.date-input').should('exist')
      .get('.time-input').should('exist')
      .get('input:last').should('have.class', 'number-input')
  })

  it('Should display all existing reservations below the form', () => {
    cy.get('.reservation-card').should('be.visible')
      .get('.reservation-card').find('p')
      .get('h3').should('have.class', 'resy-name')
      .get('.cancel').should('be.visible')
  })

  it('Should be able to type into the form\'s inputs and see text displayed in the form', () => {
    cy.get('.name-input').type('Christina').should('have.value', 'Christina')
      .get('.date-input').type('10/27').should('have.value', '10/27')
      .get('.time-input').type('7:30').should('have.value', '7:30')
      .get('.number-input').type('2').should('have.value', '2')
  })

  it('Should be able to make a reservation by filling out the form and clicking the button', () => {
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/reservations'
    },
    {
      statusCode: 200,
      body: {
        id: 2,
        name: 'Jesse',
        date: '10/18',
        time: '7:00',
        number: 4
      }
    })
      .get('.name-input').type('Jesse').should('have.value', 'Jesse')
      .get('.date-input').type('10/18').should('have.value', '10/18')
      .get('.time-input').type('7:00').should('have.value', '7:00')
      .get('.number-input').type('4').should('have.value', '4')
      .get('.form-button').click()
  })

  it('Should see the new reservation displayed on the page after submitting the form', () => {
    cy.get('.name-input').type('Christina').should('have.value', 'Christina')
      .get('.date-input').type('10/27').should('have.value', '10/27')
      .get('.time-input').type('7:30').should('have.value', '7:30')
      .get('.number-input').type('2').should('have.value', '2')
      .get('.form-button').click()
      .get('.reservation-card:last').should('contain', 'Christina')
        .and('contain', '10/27').and('contain', '7:30 pm').and('contain', 'Number of guests: 2')
  })
})
