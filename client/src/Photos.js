import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
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

  componentDidMount() {
    const id = this.props.match.params.id

    axios.get(`/api/albums/${id}`).then(response => {
      this.setState({ albums: response.data.albums })
    })
  }

  render() {
    // const image = this.state.albums.image
    console.log(this.state.albums)
    // console.log(Object.keys(this.state.albums(image)))
    return (
      <div>
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
            {this.state.albums.map(album => (
              <React.Fragment key={album.id}>
                <h4>
                  {album.title}
                  <img
                    className="photoPlus"
                    src={plus_circle}
                    alt="plus-circle"
                  />
                </h4>
                <div className="photosGalleryImages">
                  {album.images.map((image, index) => (
                    <Link to={`/Photo/${image.id}`}>
                      <img
                        className="photoGalleryImage"
                        key={index}
                        src={image.image}
                        alt=""
                      />
                    </Link>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </main>
      </div>
    )
  }
}

export default Photos
