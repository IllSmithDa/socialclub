import React, { Component } from 'react';
import Navbar from './Navbar';
import '../CSS/PageLayout.css';

export default class News extends Component {

  render() {
    return(
      <div>
        <Navbar />
        <div class = 'Page-Container'>
          <h1>News Page</h1>
        </div>
      </div>
    );
  }
}