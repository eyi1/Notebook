import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
// import Login from './container/Login';
// import Signup from './container/SignUp';
// import UserProfile from './container/users/UserProfile';
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
          </div>
        </header>

        <div className="sidebar">
          <sidebar>Sidebar</sidebar>
        </div>

        <div className="main">
          <p><NotebooksContainer /></p>
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
