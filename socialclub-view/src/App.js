import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './CSS/App.css';
import './CSS/PageLayout.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Navbar/>
        <div class = 'Page-Container'>
          <h1>Home Page</h1>
        </div>
      </div>
    );
  }
}

export default App;
