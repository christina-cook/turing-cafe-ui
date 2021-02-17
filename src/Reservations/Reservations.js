import React from 'react';
import './Reservations.css';
import Card from '../Card/Card';

const Reservations = ({reservations}) => {
  const reservationsToDisplay = reservations.map(reservation => {
    return (
      <Card
        id={reservation.id}
        date={reservation.date}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
      />
    )
  })

  return (
    <>
      {reservationsToDisplay}
    </>
  )
}

export default Reservations;
