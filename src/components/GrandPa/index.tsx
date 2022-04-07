import React,{useContext} from 'react';
import Parent from '../Parent'
interface theme {
    [K :string] : {
        color:string;
        backgroundColor:string;
    }
}
const theme:theme = {
    light:{
        color:"#222",
        backgroundColor:'#fff'
    },
    dark:{
        color:'#fff',
        backgroundColor:'#222'
    }
}
export const themeContext = React.createContext(theme.light);
const GrandPa:React.FC = ()=>{
    return (
        <>
        我是GrandPa
        <div>
        <themeContext.Provider value={theme.dark}>
            <Parent/>
        </themeContext.Provider>
        </div>
        </>
    )
}

export default GrandPa;