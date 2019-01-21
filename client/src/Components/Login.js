import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo1.png'

class Login extends Component {
  render() {
    return (
      <div>
        <main className="logInPage">
          <h1 className="logInPage">MyWanderland</h1>
          <div className="logIn">
            <img className="logo" src={logo} alt="logo" />
            <Link to="/login">
              <button className="googleLogIn">Log in with Google</button>
            </Link>
            <Link to="/login">
              <button className="facebookLogIn">Log in with Facebook</button>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}

export default Login
