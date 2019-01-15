import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import x from './images/x.png'
import mountains3 from './images/mountains3.jpeg'

class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [
        {
          image:
            'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4d371cfb35d008591513683db21d334b13b89e6d/mountains2.jpeg',
          caption: 'Trip to the mountains!'
        }
      ]
    }
  }
  render() {
    return (
      <div className="individualPhoto">
        <Link to="/Photos">
          <div className="x">
            <img src={x} alt="x" />
          </div>
        </Link>

        {this.state.photos.map((photo, index) => (
          <div className="photo">
            <img key={index} src={photo.image} alt="" />
            <h4> {photo.caption} </h4>
          </div>
        ))}
      </div>
    )
  }
}

export default Photo
