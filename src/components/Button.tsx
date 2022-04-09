import React from 'react';
import './Button.scss';
import classnames from 'classnames';
//定义传入type类型
type btnType =  'primary'| 'danger'|'success'| 'warning'| 'info';
type btnSize =  'normal'| 'mini'|'large'| 'small';

//定义传入数据接口类型
interface iBtnProps {
    children?: React.ReactElement | string,
    type?: btnType,
    size?:btnSize,
    disabled?:boolean,
    link?:boolean,
    className?:string,
    style?:{
        [K:string]:string
    },
    href?:string,
}

const Button:React.FC<iBtnProps> = (props)=>{
    const {type,size,link,href} = props;
    const classname = classnames('btn',{
        [`btn-${size}`]:size,
        [`font-${size}`]:size,
        [`btn-${type}`]:type,
    })
    console.log(classname,'classname');
    
    if(link){
        return (<>
            <a href={href?href:''}>{props.children}</a>
        </>)
    }else{
        if(props.type ){
            //如果有多传入btn的类型。就要加上相应的className。
            console.log('...');
        }
        return (
            <>
                <button className={classname}>
                    {props.children}
                </button>
            </>
        )
    }
}
//设置默认type，type的类型已经被前面的FC给固定了
Button.defaultProps = { 
    type : 'primary',
    size : 'normal',
}
export default Button;