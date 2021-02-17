import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitReservation(event) {
    event.preventDefault()
    const newResy = {
      date: this.state.date,
      id: Date.now(),
      name: this.state.name,
      number: this.state.number,
      time: this.state.time
    };
    this.props.addNewReservation(newResy)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button
          className='form-button'
          onClick={event => this.submitReservation(event)}>
          Make Reservation
        </button>
      </form>
    )
  }
}

export default Form;
