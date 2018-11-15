import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
        
          <Switch>
              
            {/*  you can name your routes on the App.js anything (they are simply linking the components) 
             when you use compnents and call axios
             the routes you have in your  index.js you link them to the components to those specfic routes 
             <Route path="/:id" component={}/>  */}
             <Route path="/" component={HomePage}/> 
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App