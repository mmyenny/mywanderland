import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Map from './Map'
import Photos from './Photos'
import Login from './Login'
import Pinpopup from './Pinpopup'
import Signup from './Signup'
import Introduction from './Introduction'
import Photo from './Photo'
import Stars from './Stars'

import Auth from './auth'
import history from './history'

const auth = new Auth()

class App extends Component {
  render() {
    return (
      <>
        <Stars />
        <Router>
          <div>
            <Route path="/" exact component={Login} />
            <Route path="/Login/" component={Login} />
            <Route path="/Signup/" component={Signup} />
            <Route path="/Map/" component={Map} />
            <Route path="/Pinpopup/" component={Pinpopup} />
            <Route path="/Photos/:id" component={Photos} />
            <Route path="/Photo/:id" component={Photo} />
          </div>
        </Router>
      </>
    )
  }
}

export default App
