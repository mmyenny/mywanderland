import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import US_Map3 from './images/US-map3.png'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get('api/albums').then(response => {
      this.setState({ albums: response.data.albums })
    })
  }

  render() {
    return (
      <div>
        <canvas />
        <main className="mainPage">
          <h1>MyWanderland</h1>
          <div className="inputBox">
            <input placeholder="Enter City, State" />
            <Link to="/Pinnedmap">
              <button>
                <i className="fas fa-map-pin" />
              </button>
            </Link>
          </div>
          <ul>
            {this.state.albums.map(albums => (
              <li key={albums.id}>
                {albums.title} - {albums.location}{' '}
              </li>
            ))}
          </ul>
          <img className="map" src={US_Map3} alt="US map" />
        </main>
      </div>
    )
  }
}

export default Map
