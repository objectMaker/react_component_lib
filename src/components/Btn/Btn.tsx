import React,{useState,useEffect} from 'react';
//给默认值，就让其变为可选的
interface BtnProps {
    title?: string;
}
const Btn:React.FC<BtnProps> =  (props)=>{
    const [count,setCount] = useState(0)
    const [locationInfo,setLocationInfo] = useState({
        x:0,
        y:0
    })
type clientInfo = {
    clientX:number;
    clientY:number;
} //添加一个确定有的类型
     const mouseClickCB = (e:Event & clientInfo) =>{
         //实现点击鼠标然后获取当前点击的位置信息
        let obj  = {
            x:e.clientX,
            y:e.clientY
        };
        setLocationInfo(obj)
     }
    useEffect(()=>{
        console.log('render');
        document.title = `你现在点了${count}次`
        document.body.addEventListener('click',mouseClickCB);
        //还有一种情况就是在这里面绑定事件
        return function(){
            console.log('事件解除');
            
            document.body.removeEventListener('click',mouseClickCB);
        }
    },[count])
    return (
        <>
            <div className="name">{props.title}</div>
            <div onClick={()=>{setCount(count+1)}}>{count}👍</div>
            <div>x:{locationInfo.x}</div>
            <div>x:{locationInfo.y}</div>
        </>
    )
}
Btn.defaultProps = {
    title: '我是默认title'
}
export default Btn