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
      clickedPlace: null,
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
    this.loadAllThePlaces()
  }

  loadAllThePlaces = () => {
    axios.get('/api/places').then(response => {
      this.setState({ places: response.data.places })
    })
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  renderClickedPlace() {
    const { clickedPlace } = this.state

    if (!clickedPlace) {
      return
    }

    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={clickedPlace.longitude}
        latitude={clickedPlace.latitude}
        closeOnClick={false}
        onClose={() => this.setState({ clickedPlace: null })}
      >
        <div className="pinPopUp">
          <p>{clickedPlace.location}</p>
          <img className="photoAlbumPreview" src={photo_album} alt="Place" />
          <Link to={`/Photos/${clickedPlace.id}`}>
            <button>View Photos</button>
          </Link>
        </div>
      </Popup>
    )
  }

  createPlace = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.post('/api/places', formData).then(response => {
      this.loadAllThePlaces()
      form.reset()
    })
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
        <main className="mainPage">
          <h1>MyWanderland</h1>
          <form action="/api/places" method="post" onSubmit={this.createPlace}>
            <div className="inputBox">
              <input placeholder="Enter City, State" name="place[location]" />
              <button>
                <i className="fas fa-map-pin" />
              </button>
            </div>
          </form>
          <div className="map">
            <MapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/myenny/cjqworl7h8tph2sk8neg86mwj"
              // "mapbox://styles/myenny/cjqwnxgfv8swk2sk82tv2vbne"
              // "mapbox://styles/myenny/cjqwn971n0cfk2spjn2e6pvzw"

              mapboxApiAccessToken="pk.eyJ1IjoibXllbm55IiwiYSI6ImNqcXBxOTB1bzAxbnozeHFvMnRpcG1leTkifQ.CySljohD9G8a5OpGc1QQjA"
              onViewportChange={this._updateViewport}
            >
              <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
              </div>

              {this.renderClickedPlace()}

              {this.state.places.map(place => {
                return (
                  <Marker
                    key={place.id}
                    latitude={place.latitude}
                    longitude={place.longitude}
                  >
                    <img
                      onClick={() => this.setState({ clickedPlace: place })}
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
