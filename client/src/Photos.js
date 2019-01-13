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
      albums: [
        {
          id: 1,
          title: 'Summer Vacation',
          images: [
            {
              id: 1,
              caption: 'Yearly camping lalapalooza - summer 2015',
              image:
                'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4d371cfb35d008591513683db21d334b13b89e6d/mountains1.jpeg'
            },
            {
              id: 2,
              caption: 'Yearly camping',
              image:
                'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bcee84c731371d3927f95907b48399d64ec988d2/mountains2.jpeg'
            }
          ]
        },
        {
          id: 2,
          title: 'Christmas 2015',
          images: [
            {
              id: 4,
              caption: 'Hiking with friends',
              image:
                'http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5d65e03fb3663dc385a2f0b96ed29bb1e056d1c0/mountains4.jpeg'
            }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('/api/albums').then(response => {
      console.log(response.data.albums)
      this.setState({ albums: response.data.albums })
    })
  }

  render() {
    // const image = this.state.albums.image
    console.log(this.state.albums)
    // console.log(Object.keys(this.state.albums(image)))
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
            {this.state.albums.map(album => (
              <>
                <h4 key={album.id}>
                  {album.title}
                  <img
                    className="photoPlus"
                    src={plus_circle}
                    alt="plus-circle"
                  />
                </h4>
                <div className="photosGalleryImages">
                  <div className="photoGalleryImage">
                    {album.images.map((image, index) => (
                      <figure>
                        <img key={index} src={image.image} alt="" />
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </>
            ))}

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
          </div>
        </main>
      </div>
    )
  }
}

export default Photos
