import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import camera from './images/camera.jpeg'
import plus_circle from './images/plus-circle.png'
import logo from './images/logo1.png'
import logo1 from './images/globe-icon.png'

class Login extends Component {
  render() {
    return (
      <div>
        <main className="logInPage">
          <h1>MyWanderland</h1>
          <div className="logIn">
            <img className="logo" src={logo} alt="logo" />
            <Link to="/Map">
              <button className="googleLogIn">Log in with Google</button>
            </Link>
            <Link to="/Map">
              <button className="facebookLogIn">Log in with Facebook</button>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}

export default Login
