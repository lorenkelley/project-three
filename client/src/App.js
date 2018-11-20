import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SignInPage from './components/SignInPage'
import Admin from './components/Admin'
import Location from './components/Location'
import UserProfile from './components/UserProfile'
import SplashPage from './components/SplashPage'

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
               <Route path="/splashpage" component={SplashPage}/> 
             <Route exact path="/sign-in" component={SignInPage}/> 
             <Route exact path="/admin" component={Admin}/> 
             <Route exact path="/locations" component={Location}/>
             <Route path="/user:id" component={UserProfile}/> 
             <Route path="/" component={HomePage}/>
           
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App