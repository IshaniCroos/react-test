import React, {Component} from 'react';
import Login from './components/Login.js'
import CalApp from './calculations/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
       

            <BrowserRouter>
                      <Switch>
                          <Route path="/" exact  name="Home" render={props => <Login {...props}/>}/>
                          <Route path="/app" exact  name="Main" render={props => <CalApp {...props}/>} />
                      </Switch>
              </BrowserRouter>



        
      </div>
    );
  }
}

export default App;