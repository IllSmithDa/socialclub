import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import UserVideoList from './UserVideoList';
import '../CSS/PageLayout.css';
export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      videoName: '',
      videoRequest: '',
      videoUploadReq: 'http://localhost:3030/uploadVideo',
      userVideoName: '',
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3030/getVideoList')
      .then((data) => {
        console.log(data);
      })
  }
  openModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  closeModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  setTimer = () => {
    window.setTimeout(() => {
      console.log('image loaded')
    }, 5000 )
  };
  handleVideoName = (event) => {
    this.setState({ userVideoName: event.target.value });
  }

  render() {
    return(
      <div>
        <Navbar />
        <div class = 'Page-Container'>
          <h1>Account Page</h1>
          <button id="myBtn2" onClick={this.openModal}> Upload Video </button>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <h1>Upload Video Here</h1>
              <form ref='uploadForm' 
                id='uploadForm' 
                action= {this.state.videoUploadReq}
                method='post' 
                encType="multipart/form-data">
                 <h2> {'Enter Video Name: '}
                    <input tupe= 'text' name='videoName' onChange = {this.handleVideoName}/>
                </h2>
                <input type="file" name="videoFile" onChange = {this.setTimer}/>
                <input type='submit' value='Upload'/>
              </form> 
            </div>
          </div>
          <UserVideoList/>
        </div>
      </div>
    );
  }
}