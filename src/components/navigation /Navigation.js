import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {

  render() {
    return (
    <div>  
        <ul>
        <h1>React Document</h1>
            <li><a >Home</a></li>
            <li><a >News</a></li>
            <li><a >Contact</a></li>
            <li><a >About</a></li>
        </ul>
    </div>
    );
  }
}


export default Navigation;
