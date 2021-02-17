import React from 'react';
import './Card.css';

const Card = ({id, name, date, number, time}) => {
  return (
    <div className='reservation-card'>
      <h3 className='resy-name'>{name}</h3>
      <p className='resy-date'>{date}</p>
      <p className='resy-time'>{time} pm</p>
      <p className='resy-number'>Number of guests: {number}</p>
      <button className='cancel'>Cancel</button>
    </div>
  )
}

export default Card;
