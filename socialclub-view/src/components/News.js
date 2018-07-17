import React, { Component } from 'react';
import Navbar from './Navbar';
import AllVideos from '../components/AllVideos';
import '../CSS/PageLayout.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class = 'Page-Container'>
          <AllVideos/>
        </div>
      </div>
    );
  }
}