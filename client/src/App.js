import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Map from './Map'
import Photos from './Photos'
import Login from './Login'
import Pinpopup from './Pinpopup'
import Signup from './Signup'
import Introduction from './Introduction'
import Pinnedmap from './Pinnedmap'
import Photo from './Photo'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <canvas />
          <Route path="/" exact component={Login} />
          <Route path="/Login/" component={Login} />
          <Route path="/Signup/" component={Signup} />
          <Route path="/Map/" component={Map} />
          <Route path="/Pinpopup/" component={Pinpopup} />
          <Route path="/Pinnedmap/" component={Pinnedmap} />
          <Route path="/Photos/" component={Photos} />
          <Route path="/Photo/" component={Photo} />
        </div>
      </Router>
    )
  }
}

export default App
