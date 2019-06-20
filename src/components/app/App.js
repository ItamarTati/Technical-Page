import React, { Component } from 'react';
import Details from '../details/Details'
import Navigation from '../navigation /Navigation'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Details />
        <Navigation />
      </div>
    );
  }
}


export default App;