import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import plus_circle from '../images/plus-circle.png'
import minus_circle from '../images/minus-circle.png'

class Album extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addPhotoFormVisible: false
    }
  }

  toggleAddPhotoForm = () => {
    this.setState({
      addPhotoFormVisible: !this.state.addPhotoFormVisible
    })
  }

  render() {
    return (
      <React.Fragment key={this.props.album.id}>
        <h4 className="photoGallerySection">
          {this.props.album.title}
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
            onSubmit={this.props.addPhotoToAlbum}
          >
            <input
              type="hidden"
              name="photo[album_id]"
              value={this.props.album.id}
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
            <button
              onClick={event =>
                this.props.deleteAlbum(event, this.props.album.id)
              }
            >
              Delete Album
            </button>
          </form>
        )}
        <div className="photosGalleryImages">
          {this.props.album.images.map((image, index) => (
            <Link
              key={index}
              to={`/Places/${this.props.place_id}/photos/${image.id}`}
            >
              <img className="photoGalleryImage" src={image.image} alt="" />
            </Link>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Album
