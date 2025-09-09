import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [navbarColor, setNavbarColor] = useState(mode === "dark" ? "#111827" : "#f1f5f9");
    const [sunColor, setSunColor] = useState("white");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showLightBeam, setShowLightBeam] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setSunColor("white");

            // Control light beam visibility
            setShowLightBeam(scrollPosition === 0);

            if (scrollPosition <= 90 || screenWidth < 480) {
                setNavbarColor(mode === "dark" ? "#111827" : "#f1f5f9");
            } else {
                setNavbarColor("transparent");
            }
        };

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth, mode]);

    useEffect(() => {
        setNavbarColor(mode === "dark" ? "#111827" : "#f1f5f9");
    }, [mode]);

    const handleMode = () => {
        toggleMode();
    };

    const handleLanguage = () => {
        toggleLanguage();
    };

    const languageSelected = language.slice(0, 2).toUpperCase();
   
    return (
        <nav style={{ 
            backgroundColor: navbarColor,
            maxHeight: "55px",
            boxShadow: "none" }}
            className="navbar container-fluid sticky-top fixed-top">
            <div className="d-flex flex-column justify-content-start">
                <div className={`simple-buttons-container ${showLightBeam ? 'show-light-beam' : ''}`}>
                    <button 
                        className={`simple-btn theme-btn ${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}
                        onClick={handleMode}
                    >
                        <i className={`fa ${mode === 'light' ? 'fa-moon-o' : 'fa-sun-o'}`}></i>
                    </button>
                    
                    <button 
                        className={`simple-btn language-btn ${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}
                        onClick={handleLanguage}
                    >
                        {language === 'english' ? 'EN' : 'ES'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
