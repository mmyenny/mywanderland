import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import camera from './images/camera.jpeg'
import plus_circle from './images/plus-circle.png'

class Login extends Component {
  render() {
    return (
      <div>
        <canvas />
        <main className="logInPage">
          <h1>MyWanderland</h1>
          <div className="logIn">
            <img className="camera" src={camera} alt="profile" />
            <img className="plus" src={plus_circle} alt="plus-circle" />
            <input placeholder="Username" /> <input placeholder="Password" />
            <Link to="/Map">
              <button>Log in</button>
            </Link>
            <div className="logInOptions">
              <label for="Remember me" className="logInOptions">
                <input id="Remember me" type="checkbox" /> Remember me
              </label>
              <Link to="/Signup">Sign up here</Link>
            </div>
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

export default Login
