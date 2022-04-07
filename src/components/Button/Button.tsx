import React from 'react';
import classNames from 'classnames';

export enum btnType {
    Primary ='primary',
    Danger ='danger',
    Warning ='warning'
}
export enum btnSize{
    Large = 'lg',
    Small = 'sm'
}

interface iProps {
    children:React.ReactNode,
    btnType?:btnType,
    btnSize?:btnSize,
    Link?:boolean,
    disabled?:boolean,
    href?:string,
}
const Button:React.FC<iProps> = (props) =>{
    const {Link,btnSize,btnType,disabled,children,href} = props;
    const className = classNames('btn',{
        [`btn-${btnType}`]:btnType,
        [`btn-${btnSize}`]:btnSize,
    })
    if(Link){
        return (
            <>
                <a href={href} className={className}>{children}</a>
            </>
        )
    }else{
        return (
            <>
                <button disabled={disabled} className={className}>{children}</button>
            </>
        )
    }
   
}
Button.defaultProps =  {
    children:'',
    btnType:btnType.Primary,
    btnSize:btnSize.Large,
    Link:false,
    disabled:false,
    href:'',
}

export default Button
