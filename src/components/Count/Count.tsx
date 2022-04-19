import React,{useReducer} from 'react';
const countReducer = ({count}:{count:number},{type,value}:{type:string,value:number}) =>{
    switch (type){
        case 'add':
            return {count:count+value}
        case 'decrement':
            return {count:count -value}
        default:
            return {count: 11}
    }
}
const Count:React.FC = ()=>{
    const [count,dispatchCount] = useReducer(countReducer,{count:0})

    return (
        <>
        我是count {count.count}
        <button onClick={()=>{dispatchCount({type:'add',value:1})}}>add</button>
        <button onClick={()=>{dispatchCount({type:'decrement',value:1})}}>decrement</button>
        </>
    )
}
export default Count;