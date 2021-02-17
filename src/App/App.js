import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Card from '../Card/Card';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations />
          <Card />
        </div>
      </div>
    )
  }
}

export default App;
