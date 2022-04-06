import {useState,useEffect} from 'react';

const useMouseMove = ()=>{
    const [mouseInfo,setMouseInfo] = useState({
        x:0,
        y:0,
    })
    interface iMouseInfo { 
        clientX:number;
        clientY:number;
    }
    const mouseMoveCB = (e:Event & iMouseInfo)=>{
        setMouseInfo({
            x:e.clientX,y:e.clientY
        })
    }
    useEffect(()=>{
        document.addEventListener('mousemove',mouseMoveCB)
        return ()=>{
            document.removeEventListener('mousemove',mouseMoveCB)
        }
    },[])
    return mouseInfo
}
export default useMouseMove;