import React from 'react';
import './App.css';

import Btn from './components/Btn/Btn'
import useMouseMove from './Hooks/mouseMove';

function App() {
  const {x,y}= useMouseMove()

  return (
    <div className="App">
      <div>x{x} </div>
      <div>y{y}</div>
        <Btn />
    </div>
  );
}

export default App;
