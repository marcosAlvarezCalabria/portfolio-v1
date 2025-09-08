import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';
import NavbarMenu from './navbarMenu/navbarMenu';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [navbarColor, setNavbarColor] = useState(mode === "dark" ? "#111827" : "#ffffff");
    const [sunColor, setSunColor] = useState("white");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setSunColor("white");

            if (scrollPosition <= 90 || screenWidth < 480) {
                setNavbarColor(mode === "dark" ? "#111827" : "#ffffff");
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
    }, [screenWidth]);

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
            boxShadow: screenWidth < 480 ? (mode === "dark" ? "2px 1px 15px rgba(236, 243, 255, 0.9)" : "2px 1px 10px rgba(4, 4, 4, 0.983)") : "none" }}
            className="navbar container-fluid sticky-top fixed-top">
            <div className="d-flex flex-column justify-content-start">
                {screenWidth < 767 && <NavbarMenu/>}
                {screenWidth >= 768 && (
                    <div className="ios-switch-container">
                        <label className="ios-switch theme-switch">
                            <input 
                                type="checkbox" 
                                checked={mode === 'light'} 
                                onChange={handleMode}
                            />
                            <span className="ios-slider">
                                <i className={`fa fa-moon-o switch-icon`}></i>
                                <i className={`fa fa-sun-o switch-icon`}></i>
                            </span>
                        </label>
                        
                        <label className="ios-switch language-switch">
                            <input 
                                type="checkbox" 
                                checked={language === 'english'} 
                                onChange={handleLanguage}
                            />
                            <span className="ios-slider">
                                <span className="switch-text">ES</span>
                                <span className="switch-text">EN</span>
                            </span>
                        </label>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavbarComponent;
