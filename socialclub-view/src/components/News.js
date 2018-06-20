import React, { Component } from 'react';
import Navbar from './Navbar';

export default class News extends Component {

  render() {
    return(
      <div>
        <Navbar />
        <h1>News Page</h1>
      </div>
    );
  }
}