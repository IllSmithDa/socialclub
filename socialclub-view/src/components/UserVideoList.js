import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/PageLayout.css';

export default class UserVideoList extends Component {
  constructor() {
    super();
    this.state = {
      videoList: [],
      index: 0,
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3030/getVideoList')
        .then(data => {  
          let videoList = []
          for (let i = 0; i < data.data.length; i++) {
              videoList.push(data.data[i])
          }
          this.setState({videoList: videoList})
          console.log(this.state.videoList);
        })
        .catch(err => {
          console.log(err);
        })
  }
  openModal = () => {

    let modal = document.getElementById('myModal2');
    modal.style.display = "block";
    
  }
  closeModal = () => {
    let modal = document.getElementById('myModal2');
    modal.style.display = "none";
  }
  render() {
    return(
      <div>
         {this.state.videoList.map((post, index) => {
            return (
              <div key = {post.id}> 
                <div className = "HomePage-div"> 
                  <img src = {post.videoThumbURL} alt="thumbnail_photo" width = '200' height = '150' onClick={this.openModal}/>
                  {post.videoName} 
                  <div>
                    <p className = "HomePage-channelName"> channel: {post.videoUploader}</p> 
                  </div>
                  <h1>{post.videoName}</h1>
                </div>
                <div id="myModal2" className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <h1>{this.state.videoList[this.state.index].videoName}</h1>
                    <video width="800" height="600" controls>
                      <source src={post.videoURL} type="video/mp4"/>
                    </video>
                  </div>
                </div>         
              </div>
            ); 
          })}
      </div>
    );
  }
}
