import React, { Component } from 'react'

class Usa extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.name === 'usa') {
      return (
        <div className='Event'>
        <h1>USA</h1>
        <h2>This event will be hosted at Los Angeles and New York</h2>
        <p>Date and time will be announced on a closer date</p>
        </div>
      )
    }else {
      return null
    }
  }
}

export default Usa