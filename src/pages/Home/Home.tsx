import React from "react";
import GrandPa from '../../components/GrandPa'
import useMouseMove from '../../Hooks/mouseMove'
import './Home.scss';
const Home = ()=>{
    const mouseInfo = useMouseMove();
    return (
        <>
        <div className='home'>home</div>
        <GrandPa/>
        <div>
            <div>x:{mouseInfo.x}</div>
            <div>y:{mouseInfo.y}</div>
        </div>
        </>
    )
    }
export default Home

