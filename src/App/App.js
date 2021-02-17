import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Card from '../Card/Card';
import Form from '../Form/Form';
import getAllReservations from '../API/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getAllReservations()
      .then(data => this.setState({
        reservations: data
      }))
      .catch(error => console.log(error))
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
