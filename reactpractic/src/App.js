import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Numbers from './components/Numbers';
import Words from './components/Words';
import Dynamic from './components/Dynamic';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Welcome path='/home' />
          <Numbers path='/:id' />
          <Words path='/:string' />
          <Dynamic path=':string/:tcolor/:bgcolor' />
        </Router>
      </header>
    </div>
  );
}

export default App;
