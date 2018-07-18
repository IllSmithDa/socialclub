import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/PageLayout.css';
import '../CSS/VideoLayout.css';

// add credentials or else the session will not be saved
axios.defaults.withCredentials = true;

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

  render() {
    return(
      <div className="video-container">
         {this.state.videoList.map((post, index) => {
            return (
              <div key = {post.id} className = "video-key"> 
                <Link to={`/video/${post.videoID}`}className = "video-div"> 
                  <img src = {post.videoThumbURL} alt="thumbnail_photo" width = '222' height = '150' />
                  <p className  = "video-videoName" >{post.videoName}</p>
                  <p className = "video-channelName"> channel: {post.userName}</p>  
                </Link>
              </div>
            ); 
          })}
      </div>
    );
  }
}
