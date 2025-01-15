import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';  // Import the App.css file

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
      </div>
    );
  }
}

export default App;