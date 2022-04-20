import React,{useMemo, useState,useCallback} from 'react'; 
import CountChild from './CountChild';

const  CountFather:React.FC = ()=>{
    let [otherCount,setOtherCount] = useState(3);
    let [count,setCount] = useState(0);
    const handleAddOtherCount = useCallback(()=>{
        setOtherCount(otherCount+1)
    },[otherCount])
    function doubleCount(){
        console.log('double执行');
        return otherCount *2
    }
    let double = useMemo(doubleCount,[otherCount]);
    return <>
        我是countFather
        <div>Count:{count}</div>
        <div>otherCount:{otherCount}</div>
        <div>Double:{double}</div>
        <div>
            <button onClick={()=>{setCount(++count)}}>点击增加count</button>
        </div>
        <CountChild handleAddOtherCount={handleAddOtherCount}/>
    </>
}
export default CountFather;