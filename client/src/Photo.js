import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import x from './images/x.png'
import mountains3 from './images/mountains3.jpeg'

class Photo extends Component {
  render() {
    return (
      <div className="individualPhoto">
        <Link to="/Photos">
          <div className="x">
            <img src={x} alt="x" />
          </div>
        </Link>
        <div className="photo">
          <img src={mountains3} alt="mountain" />
          <h4>Trip to the mountains!</h4>
        </div>
      </div>
    )
  }
}

export default Photo
