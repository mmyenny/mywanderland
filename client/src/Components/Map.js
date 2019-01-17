import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import history from '../history'
import axios from 'axios'
import photo_album from '../images/photo-album1.png'
import Pin from '../images/pins.png'
import auth from '../auth'

class Map extends Component {
  smallestPinSize = 15
  largestPinSize = 10
  mostZoomedOut = 2.5
  mostZoomedIn = 11.5

  constructor(props) {
    super(props)

    this.state = {
      clickedPlace: null,
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: this.mostZoomedOut,
        bearing: 0,
        pitch: 0
      },
      places: []
    }
  }

  markerSize = () => {
    const scaleFactor =
      (this.smallestPinSize - this.largestPinSize) /
      (this.mostZoomedIn - this.mostZoomedOut)

    const size =
      this.largestPinSize +
      scaleFactor * (this.state.viewport.zoom - this.mostZoomedOut)

    // If it is too small
    if (size < this.smallestPinSize) {
      // make the size the smallest size
      return this.smallestPinSize
    }

    // If it is too big
    if (size > this.largestPinSize) {
      // make the size the biggest size
      return this.largestPinSize
    }

    return size
  }

  componentDidMount() {
    if (!auth.isAuthenticated()) {
      history.replace('/')
      return
    }

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
    console.log({ clickedPlace })

    if (!clickedPlace) {
      return
    }

    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={clickedPlace.longitude}
        latitude={clickedPlace.latitude}
        offsetTop={this.markerSize() / 2.0}
        offsetLeft={this.markerSize() / 2.0}
        closeOnClick={false}
        onClose={() => this.setState({ clickedPlace: null })}
      >
        <div className="pinPopUp">
          <p className="pinPopUp">{clickedPlace.location}</p>
          {clickedPlace.album.length ? (
            <p>{clickedPlace.album[0].title}</p>
          ) : (
            <img className="photoAlbumPreview" src={photo_album} alt="Place" />
          )}
          <Link to={`/Places/${clickedPlace.id}`}>
            <button className="pinPopUp">View Photos</button>
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
          <div className="logOutSection">
            <Link to="/logout">
              <p className="logOut">Log Out</p>
            </Link>
          </div>

          <h1 className="mainPage">MyWanderland</h1>
          <form action="/api/places" method="post" onSubmit={this.createPlace}>
            <div className="inputBox">
              <input
                className="inputBox"
                type="text"
                placeholder="Enter City, State"
                name="place[location]"
                autoComplete="off"
              />
              <button className="inputBox">
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
              mapboxApiAccessToken="pk.eyJ1IjoibXllbm55IiwiYSI6ImNqcXBxOTB1bzAxbnozeHFvMnRpcG1leTkifQ.CySljohD9G8a5OpGc1QQjA"
              onViewportChange={this._updateViewport}
            >
              {this.renderClickedPlace()}

              {this.state.places.map(place => {
                return (
                  <Marker
                    key={place.id}
                    latitude={place.latitude}
                    longitude={place.longitude}
                    offsetLeft={(-1 * this.markerSize()) / 2.0}
                    offsetRight={(-1 * this.markerSize()) / 2.0}
                  >
                    <img
                      onClick={() => this.setState({ clickedPlace: place })}
                      width={this.markerSize()}
                      src={Pin}
                      alt="Pin"
                    />
                  </Marker>
                )
              })}

              <div className="nav" style={navStyle}>
                <NavigationControl onViewportChange={this._updateViewport} />
              </div>
            </MapGL>
          </div>
        </main>
      </div>
    )
  }
}

export default Map
