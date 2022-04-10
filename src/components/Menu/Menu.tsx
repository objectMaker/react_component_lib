import React,{createContext} from 'react';
import 'Menu.scss';
//首先定义context的interface
interface onSelect {
    (index: number):void;
}
interface iMenuContext  {
    onSelect?:onSelect;
    currentIndex:number;
}
export const MenuContext = createContext<iMenuContext>({
    onSelect:() =>{},
    currentIndex:0,
})
const Menu:React.FC<iMenuContext> = (props) =>{
    const {children,onSelect,currentIndex} = props;
    return (<>
      < MenuContext.Provider value={{
          onSelect,
          currentIndex,
      }}>
        <ul>
            {children}
        </ul>
      </MenuContext.Provider>
    </>)
}

export default Menu;