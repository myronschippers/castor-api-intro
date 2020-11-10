import React, { Component } from 'react';
import './App.css';

// CUSTOM COMPONENTS
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <h2>More Content</h2>
        </main>
      </div>
    );
  }
}

export default App;
