import React from "react";
import useMouseMove from '../../Hooks/mouseMove'

const Pie = ()=>{
    const mouseInfo = useMouseMove();
    return (
        <>
        <div>我是pie</div>
        <div>
            <div>x:{mouseInfo.x}</div>
            <div>y:{mouseInfo.y}</div>
        </div>
        </>
    )
    }
export default Pie