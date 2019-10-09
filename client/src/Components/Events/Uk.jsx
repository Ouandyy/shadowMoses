import React, { Component } from 'react'

class Uk extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.name === 'uk') {
      return (
        <div className='Event'>
        <h1>United Kingdom</h1>
        <h2>This event will be hosted at London</h2>
        <p>Date and time will be announced on a closer date</p>
        </div>
      )
    }else {
      return null
    }
  }
}

export default Uk