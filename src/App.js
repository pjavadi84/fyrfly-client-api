import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            {/* passing props to Home tracking if the user is already logged in */}
            <Route 
                exact path='/' 
                render={props => (
                <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
                )}
            />

            {/* passing props to Login component if the user is not loggedin */}
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />

            {/* passing the props to Signup for a new user registration */}
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
     
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;