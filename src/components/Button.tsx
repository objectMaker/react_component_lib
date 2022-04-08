import React from 'react';
import './Button.scss';
//定义传入数据接口类型
interface iBtnProps {
    children?: React.ReactElement | string,
    type?:string,
    size?:string,
    disabled?:boolean,
    link?:boolean,
    className?:string,
    style?:{
        [K:string]:string
    }
}

const Button:React.FC<iBtnProps> = (props)=>{
    console.log(props,'props');
    
    return (
        <>
            <button className="btn">
                {props.children}
            </button>
        </>
    )
}
export default Button;