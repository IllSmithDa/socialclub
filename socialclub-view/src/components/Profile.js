import React, { Component } from 'react';
import Navbar from './Navbar';
import '../CSS/PageLayout.css';
import '../CSS/Profile.css';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profileName: 'Sam',
    }
  }
  render() {
    return(
      <div>
        <Navbar />
        <div class = 'Page-Container'>
          <h1>{this.state.profileName}'s Profile</h1>
          <img class = 'Profile-Image'src = 'https://images.unsplash.com/photo-1530600130-16d76247813a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2eecd049220309cb59506b1393c0211&auto=format&fit=crop&w=500&q=60'/>
          <video width="320" height="240" controls>
            <source src="C:\Users\Samuel Kim\Documents\assets\VTest1.mp4" type="video/mp4"/>
          </video>
          <video width="320" height="240" controls>
            <source src="C:\Users\Samuel Kim\Documents\assets\VTest1.mp4" type="video/mp4"/>
          </video> 
          <video width="320" height="240" controls>
            <source src="C:\Users\Samuel Kim\Documents\assets\VTest1.mp4" type="video/mp4"/>
          </video> 
          <video width="320" height="240" controls>
            <source src="C:\Users\Samuel Kim\Documents\assets\VTest1.mp4" type="video/mp4"/>
          </video>  
        </div>
      </div>
    );
  }
}