import React from 'react';
import './Card.css';

const Card = ({id, name, date, number, time}) => {
  return (
    <div className='reservation-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;
