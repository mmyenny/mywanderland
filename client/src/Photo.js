import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import x from './images/x.png'

class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: null
    }
  }

  componentWillMount() {
    const photoID = this.props.match.params.id
    console.log(photoID)

    // use axios to fetch the API and update state
    axios.get(`/api/photos/${photoID}`).then(response => {
      this.setState({
        photo: response.data.photo
      })
    })
  }

  render() {
    // If we don't have a photo yet...
    if (!this.state.photo) {
      // don't show anything
      return <></>
    }

    return (
      <div className="individualPhoto">
        <div className="photoPageX">
          <Link className="photoPageX" to="/Photos">
            X
          </Link>
        </div>

        <div className="photo">
          <img className="photo" src={this.state.photo.image} alt="" />
          <h4> {this.state.photo.caption} </h4>
        </div>
      </div>
    )
  }
}

export default Photo
