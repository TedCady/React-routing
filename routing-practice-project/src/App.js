import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
    <Router>
      <Home path="/home"/>
      <Number  path="/:id"/>

      <Colors path="/:word/:color1/:color2"/>
    </Router>

    </div>
  );
}

export default App;
