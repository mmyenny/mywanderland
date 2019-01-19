import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from '../images/logo1.png'

class Welcome extends Component {
  render() {
    localStorage.setItem('seenWelcomePage', 'yes')

    return (
      <div className="welcomePage">
        <h1 className="welcome">Welcome to MyWanderland</h1>
        <div className="welcome">
          <img className="logo" src={logo} alt="logo" />
          <p className="welcomeQuote">"Not all those who wander are lost"</p>
          <p className="welcome">
            Organize your photos based on places you have traveled. Pin a
            location, create new albums and upload pictures to them!
          </p>
          <p className="welcome">Happy travels!</p>
          <Link to="/Map">
            <button className="welcome">Get stared</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Welcome
