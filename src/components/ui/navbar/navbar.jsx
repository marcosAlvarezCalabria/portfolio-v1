import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMode = () => toggleMode();
    const handleLanguage = () => toggleLanguage();

    return (
        <nav className="navbar glass-panel container-fluid sticky-top fixed-top"
            style={{
                maxHeight: "78px",
                borderBottom: "1px solid var(--surface-border)",
                transition: "all 0.3s ease"
            }}>
            <div className="nav-shell">
                <a className="brand-mark" href="#top">Marcos Alvarez</a>
                <div className="nav-links d-none d-md-flex">
                    <a href="#about">{language === 'english' ? 'About' : 'Sobre mi'}</a>
                    <a href="#projects">{language === 'english' ? 'Projects' : 'Proyectos'}</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">{language === 'english' ? 'Contact' : 'Contacto'}</a>
                </div>
                <div className={`simple-buttons-container ${isAtTop ? 'show-light-beam' : ''}`}>
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
