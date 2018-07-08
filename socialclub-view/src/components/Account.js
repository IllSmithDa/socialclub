import React, { Component } from 'react';
import Navbar from './Navbar';
import '../CSS/PageLayout.css';
export default class Account extends Component {
  constructor() {
    super();
    this.state = {
      videoName: '',
      videoRequest: '',
    }
  }
  openModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  closeModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
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
                action= {this.state.uploadImageUrl}
                method='post' 
                encType="multipart/form-data">
                <input type="file" name="profPictureFile" onChange = {this.setTimer}/>
                <input type='submit' value='Upload'/>
              </form> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}