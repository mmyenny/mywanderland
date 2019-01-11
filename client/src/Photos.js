import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import x from './images/x.png'
import camera from './images/camera.jpeg'
import beach1 from './images/beach1.jpeg'
import beach2 from './images/beach2.jpeg'
import beach3 from './images/beach3.jpeg'
import beach4 from './images/beach4.jpeg'
import mountains1 from './images/mountains1.jpeg'
import mountains2 from './images/mountains2.jpeg'
import mountains3 from './images/mountains3.jpeg'
import mountains4 from './images/mountains4.jpeg'
import plus_circle from './images/plus-circle.png'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }

  render() {
    return (
      <div>
        <canvas />
        <main className="photoGalleryPage">
          <div className="topBar">
            <div className="profileBar">
              <img className="profileImage" src={camera} alt="profile" />
              <img
                className="profilePlus"
                src={plus_circle}
                alt="plus-circle"
              />
              <h4>Michelle Yenny</h4>
              <button>Create Album</button>
            </div>
            <Link to="/Map">
              <div className="x">
                <img src={x} alt="x" />
              </div>
            </Link>
          </div>

          <div className="photoGallerySection">
            <h4>
              Summer 2017
              <img className="photoPlus" src={plus_circle} alt="plus-circle" />
            </h4>
            <div className="photosGalleryImages">
              <Link to="/Photo">
                <img className="photoGalleryImage" src={beach1} alt="beach" />
              </Link>
              <img className="photoGalleryImage" src={beach2} alt="beach" />
              <img className="photoGalleryImage" src={beach3} alt="beach" />
              <img className="photoGalleryImage" src={beach4} alt="beach" />
            </div>
            <h4>
              Fall 2014
              <img className="photoPlus" src={plus_circle} alt="plus-circle" />
            </h4>
            <div className="photosGalleryImages">
              <img
                className="photoGalleryImage"
                src={mountains1}
                alt="mountain"
              />
              <img
                className="photoGalleryImage"
                src={mountains2}
                alt="mountain"
              />
              <img
                className="photoGalleryImage"
                src={mountains3}
                alt="mountain"
              />
              <img
                className="photoGalleryImage"
                src={mountains4}
                alt="mountain"
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Photos
