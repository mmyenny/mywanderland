import React, { Component } from 'react'
import loading from '../images/globe2.gif'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img className="loading" alt="" src={loading} />
      </div>
    )
  }
}

export default Loading
