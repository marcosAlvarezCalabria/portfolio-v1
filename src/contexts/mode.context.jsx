import { createContext, useContext, useState } from "react";

const ModeContext = createContext()

    export function ModeContextProvider({children}) {

const [mode, setMode] = useState("dark")
    function toggleMode(){
       setMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')) 
    };
    const value = {
        mode,
        toggleMode
    }



    return (
        <ModeContext.Provider value= {value}>{children}</ModeContext.Provider>
    )
};
export const mod = ()=> useContext(ModeContext);
export default ModeContext