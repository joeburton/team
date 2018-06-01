import React, { Component } from 'react';
import logo from './me.png';
import './App.css';
import Team from './team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">You'll miss me when I'm gone</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Team members={['Joe Burton', 'Mark Ashton', 'Matthew Johnson', 'Andrew Bright', 'Greg Boyles', 'Jack Peacock', 'Jarad Yadallee', 'Ricky Dutton', 'Sam O\'Shea', 'Steven Hoel']} />
      </div>
    );
  }
}

export default App;
