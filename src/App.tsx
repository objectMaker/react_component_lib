import React from 'react';
import Button from './components/Button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/MenuItem/MenuItem';
import Count from './components/Count/Count';
const App:React.FC =()=>{
  const handleClick = ()=>{
    console.log('click出发了');
  }
  const handleSelect = (w:any)=>{
    
    console.log('你选择的',w);
    
  }
  return (
    <>
      <div>我是app</div>
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
      <Count/>
    </>
  )
} 
export default App