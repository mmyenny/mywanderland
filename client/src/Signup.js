import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import camera from './images/camera.jpeg'
import plus_circle from './images/plus-circle.png'

class Signup extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main className="signUpPage">
          <h1>MyWanderland</h1>
          <div className="signUp">
            <img className="camera" src={camera} alt="profile" />
            <img className="plus" src={plus_circle} alt="plus-circle" />
            <input placeholder="Full name" /> <input placeholder="Email" />
            <input placeholder="Username" /> <input placeholder="Password" />
            <Link to="/Map">
              <button>Sign up</button>
            </Link>
            <Link to="/Login">Have an account? Log in</Link>
          </div>
          <div className="logInOr">
            <div className="logInOrLine" />
            <h4>OR</h4>
            <div className="logInOrLine" />
          </div>
          <button className="googleLogIn">Log in with Google</button>
          <button className="facebookLogIn">Log in with Facebook</button>
        </main>
      </div>
    )
  }
}

export default Signup
