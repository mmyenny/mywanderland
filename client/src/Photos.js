import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import x from './images/x.png'
import camera from './images/camera.jpeg'
import beach1 from './images/beach1.jpeg'
import beach2 from './images/beach2.jpeg'
import mountains1 from './images/mountains1.jpeg'
import mountains2 from './images/mountains2.jpeg'
import plus_circle from './images/plus-circle.png'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    this.loadAlbums()
  }

  loadAlbums = () => {
    const id = this.props.match.params.id

    axios.get(`/api/albums/${id}`).then(response => {
      this.setState({ albums: response.data.albums })
    })
  }

  createAlbum = event => {
    // Don't let the BROWSER submit the form, we are in control
    event.preventDefault()

    // Get the form we are submitting
    const form = event.target

    // Make FormData to represent all the fields (given by the name attribute)
    const formData = new FormData(form)

    // Submit that formData to make a new album
    axios.post('/api/albums', formData).then(response => {
      // When that is done, load the albums
      this.loadAlbums()

      // Clear the form
      form.reset()
    })
  }
  render() {
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
              <form onSubmit={this.createAlbum}>
                {/* Hidden field to store the place id */}
                <input
                  type="hidden"
                  name="album[place_id]"
                  value={this.props.match.params.id}
                />

                <input
                  type="text"
                  placeholder="Album Title"
                  name="album[title]"
                  autoComplete="off"
                />
                <button>Create Album</button>
              </form>
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
