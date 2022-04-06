import React from 'react';
import './App.css';

import useMouseMove from './Hooks/mouseMove';

function App() {
  const {x,y}= useMouseMove()

  return (
    <div className="App">
      <div>x{x} </div>
      <div>y{y}</div>
    </div>
  );
}

export default App;
