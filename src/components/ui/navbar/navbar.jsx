import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';
import NavbarMenu from './navbarMenu/navbarMenu';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [navbarColor, setNavbarColor] = useState("black");
    const [sunColor, setSunColor] = useState("white");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setSunColor("white");

            if (scrollPosition <= 90 || screenWidth < 480) {
                setNavbarColor("black");
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
        <nav style={{ backgroundColor: navbarColor, maxHeight: "65px", boxShadow: screenWidth < 480 ? (mode === "dark" ? "2px 1px 15px rgba(236, 243, 255, 0.9)" : "2px 1px 10px rgba(4, 4, 4, 0.983)") : "none" }} className="navbar container-fluid sticky-top fixed-top">
            <div className="d-flex flex-column justify-content-start">
                {screenWidth < 767 && <NavbarMenu/>}
                {screenWidth >= 768 && (
                    <div className="d-flex">
                        <div className="form-check form-switch m-2">
                            <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckMode" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckMode">
                                <i
                                    style={{
                                        backgroundColor: sunColor,
                                        width: "24px",
                                        borderRadius: "50%",
                                        border: mode === "light" ? "solid 1px #000" : "none",
                                        cursor: 'pointer',
                                        

                                    }}
                                    className={`p-1 fa fa-${mode === "dark" ? "sun-o" : "moon-o"} mode-icon`}
                                    aria-hidden="true"
                                ></i>
                            </label>
                        </div>
                        <div className="form-check form-switch m-2 ">
                            <input className="form-check-input " onClick={handleLanguage} type="checkbox" role="switch" id="flexSwitchCheckLanguage" />
                            <label className="" htmlFor="flexSwitchCheckLanguage">
                                <p
                                    className="text-center language-icon"
                                    style={{
                                        backgroundColor: sunColor,
                                        width: "24px",
                                        height: "26px",
                                        borderRadius: "24%",
                                        cursor: 'pointer',
                                        border: mode === "light" ? "solid 1px #000" : "none",
                                    }}
                                >
                                    {languageSelected}
                                </p>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavbarComponent;
