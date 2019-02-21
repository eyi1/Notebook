import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
// import UserProfile from './containers/users/UserProfile';
import NotebooksContainer from './containers/NotebooksContainer'
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="navbar">
          <Navigation />
          <Router>
            <React.Fragment>
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/login" component={Login} />
            </React.Fragment>
          </Router>
          </div>
        </header>

        <div className="sidebar">
          Sidebar
        </div>

        <div className="main">
          <NotebooksContainer />
        </div> 
         {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

      </div>
    );
  }
}

export default App;
