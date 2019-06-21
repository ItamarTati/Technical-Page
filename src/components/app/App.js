import React, { Component } from 'react';
import Details from '../details/Details'
import Navigation from '../navigation /Navigation'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className = 'app'>
         <div className = 'nav' ><Navigation /></div>
        <div className ='details' ><Details /></div>
      </div>
    );
  }
}


export default App;