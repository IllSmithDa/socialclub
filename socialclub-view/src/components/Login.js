import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../CSS/PageLayout.css'

axios.defaults.withCredentials = true;
export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
    }
  }
  loginUser = (event) => {
    event.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    axios.post('http://localhost:3030/loginUser', user)
    .then(() => {
      setTimeout(() => {
        window.location = `/profile`;
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
  handleSetUsername = (event) => {
    this.setState({ username: event.target.value });
  }
  handleSetPassword = (event) => {
    this.setState({ password: event.target.value });
  }
  render() {
    return(
      <div>
        <Navbar />
        <div class = 'Page-Container'>
          <h1>Login Page</h1>
          <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="name" className="form-control" id="name" value = { this.state.username } onChange = { this.handleSetUsername }/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" value = { this.state.password } onChange = { this.handleSetPassword }/>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"/> Remember me</label>
        </div>
          <button type="submit" className="btn btn-default" onClick = { this.loginUser }>Submit</button>
        </div>
      </div>
    );
  }
}