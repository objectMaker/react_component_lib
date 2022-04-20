import React from 'react';
const  CountChild:React.FC<{handleAddOtherCount:Function}> = (props)=>{
    console.log('countChild执行');
    return <>
        我是countChild
        <div>子组件count</div>
        <button onClick={()=>{props.handleAddOtherCount()}}>点击增加其他数字</button>
    </>
}
export default React.memo(CountChild);