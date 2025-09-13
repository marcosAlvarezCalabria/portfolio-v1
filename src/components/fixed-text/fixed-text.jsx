import React, { useContext, useState, useEffect } from 'react';
import useScrollTracking from '../../hooks/useScrollTracking';
import "./fixed-text.css";
import LanguageContext from '../../contexts/language.context';
import ModeContext from '../../contexts/mode.context';
import IconsSocialMedia from '../icons-social-media/icons-social-media';
import Typewriter from '../ui/typewriter/Typewriter';
import ScrollIndicator from '../scroll-indicator/scroll-indicator';

function FixedText({ className }) {
    const { language } = useContext(LanguageContext);
    const { mode } = useContext(ModeContext);
    const [isespañol, setIsespañol] = useState(language === "español");
    const [modeIsDark, setModeIsDark] = useState(mode === "dark");
    const [mobileMode, setMobileMode] = useState(false);
    const activeSection = useScrollTracking(); // ¡controla el scroll !
    const decoration = activeSection;

    useEffect(() => {
    const handleResize = () => {
        setMobileMode(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    setMobileMode(window.innerWidth <= 768); // Detectar inicial
    console.log ( mobileMode)

    return () => window.removeEventListener('resize', handleResize);
}, []);
   

    useEffect(() => {
        setIsespañol(language === "español");
        setModeIsDark(mode === "dark");
    }, [language, mode]);

    return (
        <div className={`${className} col-md-4 p-5 fixed-column align-content-center h-100 ${mobileMode ? 'mobile-mode' : ''}`}>
            <div className='mb-2'></div>
            <div className="text">
               <h1 className={`name-text ${mobileMode ? 'mobile-name-text' : ''}`}><Typewriter text="Marcos Alvarez" speed={100} /></h1>
                <h5 className={`mb-5 ${mobileMode ? 'mobile-subtitle-text' : ''}`}>Web developer</h5>
                <nav className='nav d-none mb-5 d-md-block'>
                    <ul style={{ listStyle: "none" }} className='list-unstyled'>
                        <div className='d-flex list'>
                            {decoration === "about" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}
                            <li><a className={`text-decoration-none link-text ${decoration === "about" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#about">{isespañol ? "Sobre mí" : "About me"}</a></li>
                        </div>
                        <div className='d-flex list'>
                            {decoration === "projects" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}
                            <li><a className={`text-decoration-none link-text ${decoration === "projects" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#projects">{isespañol ? "Proyectos" : "Projects"}</a></li>
                        </div>
                        <div className='d-flex list'>
                            {decoration === "skills" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}
                            <li><a className={`text-decoration-none link-text ${decoration === "skills" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#skills">Skills</a></li>
                        </div>
                        <div className='d-flex list'>
                            {decoration === "contact" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}
                            <li><a className={`text-decoration-none link-text ${decoration === "contact" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#contact">{isespañol ? "Contacto" : "Contact"}</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className={`icons ${mobileMode ? "relleno" : ""}`}>
                <IconsSocialMedia />
            </div>
            {mobileMode && <ScrollIndicator />}
        </div>
    );
}

export default FixedText;
