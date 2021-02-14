import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
class App extends Component {
constructor(props){
  super(props);
  this.state = {
    isLoggedIn: false,
    user: {}
  }
}

  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;