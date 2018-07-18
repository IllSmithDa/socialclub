import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Navbar.css';

// add credentials or else the session will not be saved
axios.defaults.withCredentials = true;

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      profileName: '',
      loginState: 'LOGIN'
    }
  }
  myProfile = () => {
    window.location = '/profile';
  }
  myAccount = () => {
    window.location = '/account';
  }
  loginPage = () => {
    // window.location = '/login';
    if (this.state.loginState === 'LOGIN') {
      window.location = '/login';
    }
    if (this.state.loginState === 'LOGOUT') {
    axios
      .get(' https://friendrealm-backend.herokuapp.com/logoutUser')
      .then(() => {
        window.location = '/login';
      })
    }
  }
  newsPage = () => {
    window.location = '/news';
  }
  homePage = () => {
    window.location = '/';
  }
  componentDidMount() {
    axios
      .get(' https://friendrealm-backend.herokuapp.com/getUsername')
      .then((userData) => {
        // console.log('username:', userData);
        if (userData.data === '' || userData.data === null || userData.data === undefined) {
          this.setState({ loginState: 'LOGIN' });
        } else {
          this.setState({ loginState: 'LOGOUT' });
        }
       this.setState({ profileName: userData.data.toUpperCase() });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return(
      <div className = "navbar-container">
        <div className = 'test'>
        <div className = "navbar-item-container">        
            <img className = "navbar-icon-item" alt='home-page' src = "https://png.icons8.com/ios/1600/home.png" onClick = {this.homePage} />
            <img className = "navbar-icon-item" alt='messages' src="https://png.icons8.com/wired/40/000000/activity-feed-2.png" onClick = {this.newsPage} />
        </div>
        <div className = "navbar-item-container2">
          <button onClick = {this.myProfile} className = "navbar-button">{this.state.profileName}</button>
          <button onClick = {this.myAccount} className = "navbar-button">ACCOUNT</button>
          <button onClick = {this.loginPage} className = "navbar-button">{this.state.loginState}</button>
        </div>
        </div>
      </div>
    )
  }
}