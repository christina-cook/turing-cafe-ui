export const getAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

export const postNewReservation = (newResy) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newResy)
  })
  .then(response => response.json())
}
