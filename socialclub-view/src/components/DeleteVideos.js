import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteVideos extends Component {
  constructor() {
    super();
    this.state = {
      idVideoDeleteList = [],
      videoList = [],
    }
  }
  componentDidMount() {
    axios
      .post('http://localhost:3030/getVideoList')
      .then((videoData) => {
        this.setState({ videoList: videoData.data });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  deleteSubmission = () => {
    const videoDeleteData = { videoIDList: this.state.idVideoDeleteList}
    axios.post('http://localhost:3030/deleteVideos', videoDeleteData)
      .then(() => {
        window.location = `/account`;
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleDeleteCheck = (event) => {
    if (event.target.checked) {
      if (this.state.idVideoDeleteList.length === 0) {
        this.state.idVideoDeleteList.push(event.target.value);
      } else {
        for (let i = 0; i < this.state.idVideoDeleteList.length; i++) {
          if (this.state.idVideoDeleteList[i] === event.target.value) {
            break;
          }
          if(i === this.state.idVideoDeleteList.length - 1) {
            this.state.idVideoDeleteList.push(event.target.value);
          }    
        }
      }
    } else {
      for (let i = 0; i < this.state.idVideoDeleteList.length; i++) {
        if (this.state.idVideoDeleteList[i] === event.target.value) {
          this.state.idVideoDeleteList.splice(i, 1);
          break;
        }   
      }
    }
  }
  render() {
    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}