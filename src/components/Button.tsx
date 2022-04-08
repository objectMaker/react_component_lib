import React from 'react';
import './Button.scss';
//定义传入type类型
type btnType =  'primary'| 'danger'|'success'| 'warning'| 'info';

//定义传入数据接口类型
interface iBtnProps {
    children?: React.ReactElement | string,
    type?: btnType,
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
    if(props.type ){
        //如果有多传入btn的类型。就要加上相应的类型。
    }
    return (
        <>
            <button className="btn">
                {props.children}
            </button>
        </>
    )
}
//设置默认type，type的类型已经被前面的FC给固定了
Button.defaultProps = { 
    type : 'primary',
}
export default Button;