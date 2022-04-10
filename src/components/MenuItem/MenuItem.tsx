import React,{useContext} from 'react';
import {MenuContext} from '../Menu/Menu';
import classnames from 'classnames';
interface iMenuItemProps {
    disabled?: boolean;
    index: number;
    className?: string;
}
const MenuItem:React.FC<iMenuItemProps> = (props) => {
    const {index,className} = props;
    const {onSelect,currentIndex} = useContext(MenuContext);
   const  liClassName =  classnames('menu-item',className,{
    //还可以定义一个 ,
    isActive:currentIndex === index
}) 

    const handleClick = ()=>{
        onSelect && onSelect(index)
    };
    
    const {children} = props;

    return (<>
        <li onClick={handleClick} className={liClassName}>
            {children}
        </li>
    </>)
}
export default MenuItem;