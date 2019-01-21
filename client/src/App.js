import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import auth from './auth'
import history from './history'
import axios from 'axios'
import './App.css'
import Map from './Components/Map'
import Photos from './Components/Photos'
import Login from './Components/Login'
import Welcome from './Components/Welcome'
import Photo from './Components/Photo'
import Stars from './Components/Stars'

import Footer from './Components/Footer'

class App extends Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <>
        <Stars />
        <Router history={history}>
          <div className="App">
            <Route path="/" exact component={Login} />
            <Route path="/Login/" component={Login} />
            <Route path="/Welcome/" component={Welcome} />
            <Route path="/Map/" component={Map} />
            <Route exact path="/Places/:place_id" component={Photos} />
            <Route
              exact
              path="/Places/:place_id/photos/:photo_id"
              component={Photo}
            />
            <Route path="/login" render={() => auth.login()} />
            <Route
              path="/logout"
              render={() => {
                auth.logout()

                return <></>
              }}
            />
            <Route
              path="/callback"
              render={() => {
                auth.handleAuthentication(() => {
                  // Set the axios authentication headers
                  axios.defaults.headers.common = {
                    Authorization: auth.authorizationHeader()
                  }
                })

                return <></>
              }}
            />
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App
