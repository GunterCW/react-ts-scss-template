import React from 'react';

import './app.scss';
import logo1 from 'assets/images/logo.svg';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
