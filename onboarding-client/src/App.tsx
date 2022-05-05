import React from 'react';
import logo from './logo.svg';
import './App.css';
import Onboarding from './views/Onboarding';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="main">
        <Onboarding />
      </div>
    </div>
  );
}

export default App;
