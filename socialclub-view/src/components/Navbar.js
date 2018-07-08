import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Navbar.css';

// add credentials or else the session will not be saved
axios.defaults.withCredentials = true;

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      profileName: 'SAM',
      loginState: 'LOGOUT'
    }
  }
  myProfile = () => {
    window.location = '/profile';
  }
  myAccount = () => {
    window.location = '/account';
  }
  loginPage = () => {
    window.location = '/login';
  }
  newsPage = () => {
    window.location = '/news';
  }
  homePage = () => {
    window.location = '/';
  }
  componentDidMount() {
    axios
      .get('http://localhost:3030/getUsername')
  }
  render() {
    return(
      <div className = "navbar-container">
        <div className = "navbar-item-container">        
            <img className = "navbar-icon-item" src = "https://png.icons8.com/ios/1600/home.png" onClick = {this.homePage} />
            <img className = "navbar-icon-item" src="https://png.icons8.com/wired/40/000000/activity-feed-2.png" onClick = {this.newsPage} />
        </div>
        <div className = "navbar-item-container">
          <button onClick = {this.myProfile} className = "navbar-button">{this.state.profileName}</button>
          <button onClick = {this.myAccount} className = "navbar-button">ACCOUNT</button>
          <button onClick = {this.loginPage} className = "navbar-button">{this.state.loginState}</button>
        </div>
      </div>
    )
  }
}