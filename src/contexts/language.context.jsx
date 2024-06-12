import { useContext, createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageContextProvider({children}){
    const [language, setLanguage] = useState("español")

    function toggleLanguage(){
        setLanguage((prevLanguage) => (prevLanguage === "español" ? "english" : "español"))
       

    };
    const value = {
        language,
        toggleLanguage
    }

    return(
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    )
};
export const lan = ()=> useContext(LanguageContext);
export default LanguageContext