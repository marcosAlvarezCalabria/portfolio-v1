import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/ui/navbar/navbar';
import FixedText from '../../components/fixed-text/fixed-text';
import MainContent from '../../components/main-content/main-content';
import "./main-page.css";
import ModeContext from '../../contexts/mode.context';

 


function MainPage() {
    const mode = useContext(ModeContext);
    const [theme, setTheme] = useState(mode);

    useEffect(() => {
        setTheme(mode);
    }, [mode]);



    return (
        <>
            <Navbar></Navbar> 
          
          
            <div className="main-page ">
                 <FixedText className={theme.mode} /> 
                 <MainContent className={theme.mode} /> 
            </div>
        </>
    );
}

export default MainPage;