import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../CSS/PageLayout.css';
import '../CSS/Profile.css';

// add credentials or else the session will not be saved
axios.defaults.withCredentials = true;

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profileName: '',
      uploadImageUrl:'http://localhost:3030/uploadProfilePic',
    }
  }
  componentDidMount() {
    console.log('asdfwe');
    axios
      .get('http://localhost:3030/getUsername')
      .then((userData) => {
        console.log('username:', userData.data );
        
        // uppercase first letter only and slice rest of the string onto the first to be kept lowercase
        this.setState({ profileName: userData.data[0].toUpperCase() + userData.data.slice(1) })
      })
      .catch(err => {
        console.log(err);
      })
  }
  openImageModal = () => {
    let modal = document.getElementById('imageUploadModal');
    modal.style.display = "block";
  }
  closeImageModal = () =>{
    let modal = document.getElementById('imageUploadModal');
    modal.style.display = "none";
  }
  setTimer() {
    window.setTimeout(() => {
      console.log('image loaded')
    }, 500000 )
  };
  render() {
    return(
      <div>
        <Navbar />
        <div class = 'Page-Container'>
          <h1>{this.state.profileName}'s Profile</h1>
          
          <div class = 'profile-image-container'>
            <button className='image-button' onClick={this.openImageModal}>Update Profile Picture</button>
            <img class = 'Profile-Image'src = 'https://images.unsplash.com/photo-1530600130-16d76247813a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2eecd049220309cb59506b1393c0211&auto=format&fit=crop&w=500&q=60'/>
          </div>

          <div id='imageUploadModal' className='image-modal'>
            <div className='modal-content'>
              <span className='modal-close' onClick={this.closeImageModal}>&times;</span>
              <h1>Upload new Profile picture</h1>
              <form ref='uploadForm' 
                id='uploadForm' 
                action= {this.state.uploadImageUrl}
                method='post' 
                encType="multipart/form-data">
                <input type="file" name="profPictureFile" onChange = {this.setTimer}/>
                <input type='submit' value='Upload'/>
              </form> 
            </div>
          </div>
          

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