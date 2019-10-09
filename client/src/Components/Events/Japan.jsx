import React, { Component } from 'react'

class Japan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.name === 'jp') {
      return (
        <div className='Event'>
        <h1>Japan</h1>
        <h2>This event will be hosted at Tokyo</h2>
        <p>Date and time will be announced on a closer date</p>
        </div>
      )
    }else {
      return null
    }
  }
}

export default Japan