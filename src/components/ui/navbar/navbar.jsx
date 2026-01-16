import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [showLightBeam, setShowLightBeam] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Control light beam visibility on scroll
            setShowLightBeam(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMode = () => toggleMode();
    const handleLanguage = () => toggleLanguage();

    return (
        <nav className="navbar glass-panel container-fluid sticky-top fixed-top"
            style={{
                maxHeight: "60px",
                borderBottom: "1px solid var(--surface-border)",
                transition: "all 0.3s ease"
            }}>
            <div className="d-flex flex-column justify-content-start">
                <div className={`simple-buttons-container ${showLightBeam ? 'show-light-beam' : ''}`}>
                    <button
                        className={`simple-btn theme-btn ${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}
                        onClick={handleMode}
                        aria-label="Toggle Theme"
                    >
                        <i className={`fa ${mode === 'light' ? 'fa-moon-o' : 'fa-sun-o'}`}></i>
                    </button>

                    <button
                        className={`simple-btn language-btn ${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}
                        onClick={handleLanguage}
                        aria-label="Toggle Language"
                    >
                        {language === 'english' ? 'EN' : 'ES'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
