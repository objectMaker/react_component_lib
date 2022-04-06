import React from 'react';
import { Routes, Route ,Link} from "react-router-dom";
import Home from "./pages/Home/Home"
import Pie from "./pages/Pie/Pie"
import './App.css';

import useMouseMove from './Hooks/mouseMove';

function App() {
  const {x,y}= useMouseMove()

  return (
    <div className="App">
      <div>x{x} </div>
      <div>y{y}</div>
      <nav>
        <Link to="/pie">Pie</Link>
        <Link to="/home">Home</Link>
      </nav>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="pie" element={<Pie />} />
      </Routes>
    </div>
  );
}

export default App;
