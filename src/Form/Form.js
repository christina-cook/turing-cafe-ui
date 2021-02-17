import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  render() {
    return (
      <h2>Form goes here</h2>
    )
  }
}

export default Form;
