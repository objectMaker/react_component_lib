import React from "react";


const  Son:React.FC = function(){
    // const style = useContext(themeContext);
console.log('执行');
    return  (
        <>
        <div style={{color:'red'}}>
            我是son
            <div>
                我是btn根据外侧变量显示不同颜色
            </div>
        </div>
        </>
    )
}
export default Son;