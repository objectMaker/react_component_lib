import React from 'react';
import Button from './components/Button';

const App:React.FC =()=>{
  const handleClick = ()=>{
    console.log('click出发了');
  }
  return (
    <>
      <div>我是app</div>
      <Button size="large" disabled={false} onClick={handleClick}>我是你的btn呀</Button>
    </>
  )
} 
export default App