import React from "react";
import useMouseMove from '../../Hooks/mouseMove'
const Home = ()=>{
    const mouseInfo = useMouseMove();
    return (
        <>
        <div>home</div>
        <div>
            <div>x:{mouseInfo.x}</div>
            <div>y:{mouseInfo.y}</div>
        </div>
        </>
    )
    }
export default Home