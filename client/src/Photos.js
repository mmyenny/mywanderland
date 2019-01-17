import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import camera from './images/camera.jpeg'
import plus_circle from './images/plus-circle.png'
import minus_circle from './images/minus-circle.png'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      albums: [],
      loaded: false,
      addPhotoFormVisible: false
    }
  }

  componentDidMount() {
    this.loadAlbums()
  }

  loadAlbums = () => {
    const place_id = this.props.match.params.place_id

    axios.get(`/api/albums/${place_id}`).then(response => {
      this.setState({
        loaded: true,
        albums: response.data.albums,
        user: response.data.user
      })
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

  addPhotoToAlbum = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.post('/api/photos', formData).then(response => {
      // When that is done, load the albums
      this.loadAlbums()

      form.reset()
    })
  }

  toggleAddPhotoForm = () => {
    this.setState({
      addPhotoFormVisible: !this.state.addPhotoFormVisible
    })
  }

  render() {
    if (!this.state.loaded) {
      return <></>
    }

    return (
      <div>
        <div className="photoPageBack">
          <Link className="photoPageBack" to="/Map">
            &lt; back
          </Link>
        </div>
        <main className="photoGalleryPage">
          <div className="topBar">
            <div className="profileBar">
              <img
                className="profileImage"
                src={this.state.user.profile_image}
                alt="profile"
              />
              <img
                className="profilePlus"
                src={plus_circle}
                alt="plus-circle"
              />
              <h4 className="profileBar">{this.state.user.name}</h4>
              <form onSubmit={this.createAlbum}>
                {/* Hidden field to store the place id */}
                <input
                  type="hidden"
                  name="album[place_id]"
                  value={this.props.match.params.place_id}
                />

                <input
                  className="profileBar"
                  type="text"
                  placeholder="Album Title"
                  name="album[title]"
                  autoComplete="off"
                />
                <button className="profileBar">Create Album</button>
              </form>
            </div>
          </div>

          <div className="photoGallerySection">
            {this.state.albums.map(album => (
              <React.Fragment key={album.id}>
                <h4 className="photoGallerySection">
                  {album.title}
                  {!this.state.addPhotoFormVisible && (
                    <img
                      className="photoPlusMinus"
                      src={plus_circle}
                      alt="plus-circle"
                      onClick={this.toggleAddPhotoForm}
                    />
                  )}
                  {this.state.addPhotoFormVisible && (
                    <img
                      className="photoPlusMinus"
                      src={minus_circle}
                      alt="plus-circle"
                      onClick={this.toggleAddPhotoForm}
                    />
                  )}
                </h4>
                {this.state.addPhotoFormVisible && (
                  <form
                    className="uploadPhotoForm"
                    onSubmit={this.addPhotoToAlbum}
                  >
                    <input
                      type="hidden"
                      name="photo[album_id]"
                      value={album.id}
                    />
                    <input type="file" name="photo[image]" />
                    <div>
                      <input
                        type="text"
                        placeholder="Add an Image Caption"
                        name="photo[caption]"
                        autoComplete="off"
                      />
                      <button>Create Photo</button>
                    </div>
                    <button>Delete Album</button>
                  </form>
                )}
                <div className="photosGalleryImages">
                  {album.images.map((image, index) => (
                    <Link
                      key={index}
                      to={`/Places/${this.props.match.params.place_id}/photos/${
                        image.id
                      }`}
                    >
                      <img
                        className="photoGalleryImage"
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
