import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OnboardingProvider } from './components/OnboardingProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="main">
        <OnboardingProvider />
      </div>
    </div>
  );
}

export default App;
