import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import plus_circle from '../images/plus-circle.png'
import Album from './Album'
import Loading from './Loading'

class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      albums: [],
      place: {},
      loaded: false,
      uploading: false
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
        place: response.data.place,
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
      if (response.data.errors) {
        alert("Album title can't be blank")
      } else {
        // When that is done, load the albums
        this.loadAlbums()

        // Clear the form
        form.reset()
      }
    })
  }

  addPhotoToAlbum = event => {
    event.preventDefault()

    if (this.state.uploading) {
      alert('Already uploading, please wait')
      return
    }

    const form = event.target

    const formData = new FormData(form)

    this.setState(
      {
        uploading: true
      },
      () => {
        axios
          .post('/api/photos', formData)
          .then(response => {
            // When that is done, load the albums
            this.loadAlbums()

            this.setState({
              uploading: false
            })
            form.reset()
          })
          .catch(() => {
            this.setState({
              uploading: false
            })
          })
      }
    )
  }

  deleteAlbum = (event, album_id) => {
    const answer = window.confirm('Are you sure you want to delete this album?')

    if (answer) {
      axios.delete(`/api/albums/${album_id}`).then(response => {
        this.loadAlbums()
      })
    } else {
      this.loadAlbums()
    }
  }

  render() {
    if (!this.state.loaded) {
      return <Loading />
    }

    return (
      <div className="photoGallery">
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
              <p className="placeName">{this.state.place.location}</p>
            </div>
          </div>
          <hr />
          <div className="photoGallerySection">
            {this.state.albums.map(album => (
              <Album
                key={album.id}
                album={album}
                place_id={this.props.match.params.place_id}
                addPhotoToAlbum={this.addPhotoToAlbum}
                deleteAlbum={this.deleteAlbum}
              />
            ))}
          </div>
        </main>
      </div>
    )
  }
}

export default Photos
