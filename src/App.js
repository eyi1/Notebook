import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { Route } from 'react-router-dom';
//import { Switch, Route, Link } from "react-router-dom";
import Signup from './containers/Signup';
import Login from './containers/Login';
// import UserProfile from './containers/users/UserProfile';
import NotebooksContainer from './containers/NotebooksContainer'
import NotesContainer from './containers/NotesContainer'
import Home from './containers/Home'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbar">
          <Navigation />
          </div>
        </header>       
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/notebooks" component={NotebooksContainer} />
          <Route exact path="/notebooks/:id/notes" component={NotesContainer} />
          <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
