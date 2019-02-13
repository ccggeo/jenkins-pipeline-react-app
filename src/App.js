import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://media1.tenor.com/images/0f42c2d2746a131feaa1f5ce845f9061/tenor.gif?itemid=4438363" className="App-logo" alt="logo" />
          <h1 className="App-title">AYYYYY LMAO</h1>
        </header>
        <p className="App-intro">
	This react site is for aliens only
	<div>
	<img src={logo} className="App-logo" alt="logo" />
	</div>
	</p>
      </div>
    );
  }
}

export default App;
