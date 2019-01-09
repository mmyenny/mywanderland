import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import US_Map3 from './images/US-map3.png'
import Pin from './images/pin.png'

class Pinnedmap extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main className="mainPage">
          <h1>MyWanderland</h1>
          <div className="inputBox">
            <input placeholder="Enter City, State" />
            <button>
              <i className="fas fa-map-pin" />
            </button>
          </div>
          <img className="map" src={US_Map3} alt="US map" />
          <Link to="/Photos">
            <img className="pin" src={Pin} alt="pin" />
          </Link>
          <img className="pin1" src={Pin} alt="pin" />
          <img className="pin2" src={Pin} alt="pin" />
        </main>
      </div>
    )
  }
}

export default Pinnedmap
