import React from 'react';
// import Button from './components/Button';
// import Menu from './components/Menu/Menu';
// import MenuItem from './components/MenuItem/MenuItem';
// import Count from './components/Count/Count';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import About from './pages/About/About';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
const App:React.FC =()=>{
  // const handleClick = ()=>{
  //   console.log('click出发了');
  // }
  // const handleSelect = (w:any)=>{
    
  //   console.log('你选择的',w);
    
  // }
  return (
    <>
      {/* <div>我是app</div>
      <Button size="large" disabled={false} onClick={handleClick}>我是你的btn呀</Button>
      <hr />
      <Menu currentIndex={0} onSelect={handleSelect}>
        <MenuItem index={0}>
          我是Item1
        </MenuItem >
        <MenuItem index={1}>
          我是Item2
        </MenuItem>
        <MenuItem index={2}>
          我是Item3
        </MenuItem>
      </Menu>
      <Count/> */}
      <Link to="about">about</Link>
      <Link to="user">user</Link>
      <Link to="">home</Link>
      <div></div>
      <hr />
      <Routes> 
        <Route path="/about" element={<About/>}>
        </Route>
       <Route path="/user" element={<User/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
       </Routes>
         
    </>
  )
} 
export default App