import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Welcome extends Component {
  render() {
    localStorage.setItem('seenWelcomePage', 'yes')

    return (
      <div>
        <div className="welcome">
          <h1>Welcome to MyWanderland</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            distinctio repellendus eum, doloribus architecto voluptatem,
            recusandae quis voluptates exercitationem laudantium nobis non.
            Suscipit veniam explicabo, vitae eaque enim vero facilis.
          </p>
          <Link to="/Map">
            <button>Get stared</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Welcome
