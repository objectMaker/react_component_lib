import React,{useContext} from "react";
import { themeContext } from "../GrandPa"; 


const  Son:React.FC = function(){
    const style = useContext(themeContext);
console.log(style);
    return  (
        <>
        <div style={{color:'red'}}>
            我是son
            <div style={style}>
                我是btn根据外侧变量显示不同颜色
            </div>
        </div>
        </>
    )
}
export default Son;