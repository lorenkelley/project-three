import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            {/* <Route exact path="/" component={}/>
            <Route path="/:id" component={}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App