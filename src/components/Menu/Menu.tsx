import React,{createContext,useState} from 'react';
import './Menu.scss';
//首先定义context的interface
interface onSelect {
    (...args: any[]):void;
}
interface iMenuContext  {
    onSelect?:onSelect;
    currentIndex:number;
}
export const MenuContext = createContext<iMenuContext>({
    currentIndex:0,
})
const Menu:React.FC<iMenuContext> = (props) =>{
    const {children,onSelect,currentIndex} = props;

    const [currentIndexState,setCurrentIndex] = useState(currentIndex)
    const defaultSelect =(index:number) =>{
        setCurrentIndex(index); //默认选中函数执行
        onSelect && onSelect(index)//自定义选中的函数，传入的值为index
    }
    return (<>
      < MenuContext.Provider value={{
          onSelect:defaultSelect,
          currentIndex:currentIndexState,
      }}>
        <ul>
            {children}
        </ul>
      </MenuContext.Provider>
    </>)
}

export default Menu;