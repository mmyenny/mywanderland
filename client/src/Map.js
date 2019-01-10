import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import axios from 'axios'
import Pin from './images/pin.png'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      albums: []
    }
  }

  componentDidMount() {
    axios.get('api/albums').then(response => {
      this.setState({ albums: response.data.albums })
    })
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { viewport } = this.state

    const navStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '10px'
    }

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
                {albums.title} - {albums.location}
              </li>
            ))}
          </ul>
          <div className="map">
            <MapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/myenny/cjqpt2bff1pxp2spfrm20kr3o"
              mapboxApiAccessToken="pk.eyJ1IjoibXllbm55IiwiYSI6ImNqcXBxOTB1bzAxbnozeHFvMnRpcG1leTkifQ.CySljohD9G8a5OpGc1QQjA"
              onViewportChange={this._updateViewport}
            >
              <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
              </div>

              {this.state.albums.map(album => {
                return (
                  <Marker
                    key={album.id}
                    longitude={album.longitude}
                    latitude={album.latitude}
                  >
                    <img src={Pin} />
                  </Marker>
                )
              })}
            </MapGL>
          </div>
        </main>
      </div>
    )
  }
}

export default Map
