import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Switch, Route, Link } from "react-router-dom";
import Signup from './containers/Signup';
import Login from './containers/Login';
// import UserProfile from './containers/users/UserProfile';
import NotebooksContainer from './containers/NotebooksContainer'
import NotesContainer from './containers/NotesContainer'
// import Notes from './components/Notes'
import { Jumbotron, Container } from 'react-bootstrap';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="navbar">
          <Navigation />
          </div>
        </header>
          <Router>
            <React.Fragment>
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/notebooks" component={NotebooksContainer} />
             <Route exact path="/notebooks/:id/notes" component={NotesContainer} /> 
            </React.Fragment>
          </Router>
         {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        {/* <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
          </Container>
        </Jumbotron>; */}
      </div>
    );
  }
}

export default App;
