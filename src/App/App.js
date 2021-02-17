import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
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

  addNewReservation = (reservation) => {
    this.setState({
      reservations: [...this.state.reservations, reservation]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form-container'>
          <Form addNewReservation={this.addNewReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
