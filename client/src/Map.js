import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import axios from 'axios'
import Pin from './images/pin.png'
import photo_album from './images/photo-album1.png'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popupInfo: null,
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.5,
        bearing: 0,
        pitch: 0
      },
      places: []
    }
  }

  componentDidMount() {
    axios.get('api/places').then(response => {
      this.setState({ places: response.data.places })
    })
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  renderPopup() {
    const { popupInfo } = this.state

    if (!popupInfo) {
      return
    }
    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={() => this.setState({ popupInfo: null })}
      >
        <div className="pinPopUp">
          <p>{popupInfo.location}</p>
          <img className="photoAlbumPreview" src={photo_album} alt="Place" />
          <Link to={`/Photos/${popupInfo.id}`}>
            <button>View Photos</button>
          </Link>
        </div>
      </Popup>
    )
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
          <div className="map">
            <MapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/myenny/cjqpt2bff1pxp2spfrm20kr3o"
              // "mapbox://styles/myenny/cjqrnquxj0fg82qoc0dtbh1qm"

              mapboxApiAccessToken="pk.eyJ1IjoibXllbm55IiwiYSI6ImNqcXBxOTB1bzAxbnozeHFvMnRpcG1leTkifQ.CySljohD9G8a5OpGc1QQjA"
              onViewportChange={this._updateViewport}
            >
              <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
              </div>

              {this.renderPopup()}

              {this.state.places.map(place => {
                return (
                  <Marker
                    key={place.id}
                    latitude={place.latitude}
                    longitude={place.longitude}
                  >
                    <img
                      onClick={() => this.setState({ popupInfo: place })}
                      width="30"
                      src={Pin}
                      alt="Pin"
                    />
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
