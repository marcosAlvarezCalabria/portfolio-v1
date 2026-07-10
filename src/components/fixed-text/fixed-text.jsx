import React, { useContext, useEffect, useState } from 'react';
import useScrollTracking from '../../hooks/useScrollTracking';
import './fixed-text.css';
import LanguageContext from '../../contexts/language.context';
import ModeContext from '../../contexts/mode.context';
import IconsSocialMedia from '../icons-social-media/icons-social-media';
import Typewriter from '../ui/typewriter/Typewriter';
import ScrollIndicator from '../scroll-indicator/scroll-indicator';

function FixedText({ className }) {
    const { language } = useContext(LanguageContext);
    const { mode } = useContext(ModeContext);
    const [isEspanol, setIsEspanol] = useState(language === 'español');
    const [modeIsDark, setModeIsDark] = useState(mode === 'dark');
    const [mobileMode, setMobileMode] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const activeSection = useScrollTracking();
    const decoration = activeSection;

    useEffect(() => {
        const handleResize = () => {
            setMobileMode(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        setMobileMode(window.innerWidth <= 768);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsEspanol(language === 'español');
        setModeIsDark(mode === 'dark');
    }, [language, mode]);

    useEffect(() => {
        if (mobileMode) {
            setShowSubtitle(true);
            setShowNavigation(true);
            setShowIcons(true);
            return;
        }

        const timer1 = setTimeout(() => {
            setShowSubtitle(true);
        }, 800);

        const timer2 = setTimeout(() => {
            setShowNavigation(true);
        }, 1100);

        const timer3 = setTimeout(() => {
            setShowIcons(true);
        }, 1400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [mobileMode]);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            return;
        }

        const headerHeight = 70;
        const offsetTop = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    };

    const cvUrl = 'https://drive.google.com/file/d/1cXay5tqPULuw5wr4k69LCv8oJpJovpCJ/view?usp=drive_link';
    const heroEyebrow = isEspanol ? 'Disponible para proyectos' : 'Available for projects';
    const heroRole = isEspanol ? 'Desarrollador web freelance' : 'Freelance web developer';
    const heroStatement = isEspanol
        ? 'Construyo software util con foco en producto, rendimiento y claridad.'
        : 'I build useful software with a product mindset, strong performance, and clear execution.';
    const heroBody = isEspanol
        ? 'Trabajo con React, JavaScript, Node.js y arquitectura full-stack para crear experiencias modernas, accesibles y listas para produccion.'
        : 'I work with React, JavaScript, Node.js, and full-stack architecture to ship modern, accessible, production-ready experiences.';
    const proofItems = isEspanol
        ? ['Frontend + Backend', 'SEO y rendimiento', 'Proyectos reales']
        : ['Frontend + Backend', 'SEO and performance', 'Real projects'];

    return (
        <div className={`${className} col-md-4 p-5 fixed-column align-content-center h-100 ${mobileMode ? 'mobile-mode' : ''}`}>
            <div className="mb-2"></div>

            <div className="text hero-copy">
                <span className={`hero-eyebrow ${!mobileMode ? (showSubtitle ? 'animate-slide-in-left' : 'hidden-left') : ''}`}>
                    {heroEyebrow}
                </span>

                <h1 className={`name-text ${mobileMode ? 'mobile-name-text' : ''}`}>
                    <Typewriter text="Marcos Alvarez" speed={100} />
                </h1>

                <h5 className={`hero-role ${mobileMode ? 'mobile-subtitle-text' : ''} ${!mobileMode ? (showSubtitle ? 'animate-slide-in-left' : 'hidden-left') : ''}`}>
                    {heroRole}
                </h5>

                <p className={`hero-statement ${!mobileMode ? (showSubtitle ? 'animate-slide-in-left' : 'hidden-left') : ''}`}>
                    {heroStatement}
                </p>

                <p className={`hero-body-copy ${!mobileMode ? (showSubtitle ? 'animate-slide-in-left' : 'hidden-left') : ''}`}>
                    {heroBody}
                </p>

                <div className={`hero-actions ${!mobileMode ? (showSubtitle ? 'animate-slide-in-left' : 'hidden-left') : ''}`}>
                    <a className="hero-button hero-button-primary" href="#projects" onClick={(event) => handleSmoothScroll(event, 'projects')}>
                        {isEspanol ? 'Ver proyectos' : 'View projects'}
                    </a>
                    <a className="hero-button hero-button-secondary" href="#contact" onClick={(event) => handleSmoothScroll(event, 'contact')}>
                        {isEspanol ? 'Contactar' : 'Get in touch'}
                    </a>
                    <a className="hero-button hero-button-secondary" href={cvUrl} target="_blank" rel="noreferrer">
                        {isEspanol ? 'CV' : 'Resume'}
                    </a>
                </div>

                <div className={`hero-proof-list ${!mobileMode ? (showSubtitle ? 'animate-slide-in-left' : 'hidden-left') : ''}`}>
                    {proofItems.map((item) => (
                        <span key={item} className="hero-proof-pill">{item}</span>
                    ))}
                </div>

                <nav className={`nav d-none mb-9 d-md-block mt-9 ${!mobileMode ? (showNavigation ? 'animate-slide-in-right' : 'hidden-right') : ''}`}>
                    <ul style={{ listStyle: 'none' }} className="list-unstyled">
                        <div className="d-flex list">
                            {decoration === 'about' && (<div className={`line line-${modeIsDark ? 'light' : 'dark'}`}></div>)}
                            <li>
                                <a
                                    className={`text-decoration-none link-text ${decoration === 'about' && `list-${modeIsDark ? 'light' : 'dark'}`}`}
                                    href="#about"
                                    onClick={(event) => handleSmoothScroll(event, 'about')}
                                >
                                    {isEspanol ? 'Sobre mi' : 'About'}
                                </a>
                            </li>
                        </div>
                        <div className="d-flex list">
                            {decoration === 'projects' && (<div className={`line line-${modeIsDark ? 'light' : 'dark'}`}></div>)}
                            <li>
                                <a
                                    className={`text-decoration-none link-text ${decoration === 'projects' && `list-${modeIsDark ? 'light' : 'dark'}`}`}
                                    href="#projects"
                                    onClick={(event) => handleSmoothScroll(event, 'projects')}
                                >
                                    {isEspanol ? 'Proyectos' : 'Projects'}
                                </a>
                            </li>
                        </div>
                        <div className="d-flex list">
                            {decoration === 'skills' && (<div className={`line line-${modeIsDark ? 'light' : 'dark'}`}></div>)}
                            <li>
                                <a
                                    className={`text-decoration-none link-text ${decoration === 'skills' && `list-${modeIsDark ? 'light' : 'dark'}`}`}
                                    href="#skills"
                                    onClick={(event) => handleSmoothScroll(event, 'skills')}
                                >
                                    Skills
                                </a>
                            </li>
                        </div>
                        <div className="d-flex list">
                            {decoration === 'contact' && (<div className={`line line-${modeIsDark ? 'light' : 'dark'}`}></div>)}
                            <li>
                                <a
                                    className={`text-decoration-none link-text ${decoration === 'contact' && `list-${modeIsDark ? 'light' : 'dark'}`}`}
                                    href="#contact"
                                    onClick={(event) => handleSmoothScroll(event, 'contact')}
                                >
                                    {isEspanol ? 'Contacto' : 'Contact'}
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>

            <div className={`hero-portrait-card ${!mobileMode ? (showIcons ? 'animate-slide-in-bottom' : 'hidden-icons') : ''}`}>
                <div className="hero-portrait-frame">
                    <img className="hero-portrait-image" src="/images/profile-marcos.jpeg" alt="Portrait of Marcos Alvarez" />
                </div>
                <div className="hero-portrait-meta">
                    <span className="hero-portrait-label">{isEspanol ? 'Base' : 'Base'}</span>
                    <strong>Dublin / Remote</strong>
                </div>
            </div>

            <div className={`icons ${mobileMode ? 'relleno' : ''} ${!mobileMode ? (showIcons ? 'animate-slide-in-bottom' : 'hidden-icons') : ''}`}>
                <IconsSocialMedia />
            </div>

            {mobileMode && <ScrollIndicator />}
        </div>
    );
}

export default FixedText;
