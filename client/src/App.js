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
            // you can name yourroutes anything but when you use compnents and call axios
            // the routesyou have in your  index.js you link them to the components 
            <Route path="/:id" component={}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App