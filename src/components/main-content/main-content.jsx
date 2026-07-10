import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import useScrollTracking from "../../hooks/useScrollTracking";
import LanguageContext from "../../contexts/language.context";
import "./main-content.css";
import ModeContext from "../../contexts/mode.context";
import Link from '@mui/material/Link';

const IconsSkills = lazy(() => import("../icons-skills/icons-skills"));
const WhatsappLink = lazy(() => import("../social-media/whastapp-link/whatsappLink"));
const EmailLink = lazy(() => import("../social-media/email-link/emailLink"));
const TechnicalCard = lazy(() => import("../technical-card/TechnicalCard"));
import projectsDataEnglish from "../../assets/data/englishProjects.json";
import projectDataEspanol from "../../assets/data/españolProjects.json";

function MainContent({ className }) {
    const { language } = useContext(LanguageContext);
    const [isEspanol, setIsEspanol] = useState(language === "español");
    const focus = useScrollTracking();
    const { mode } = useContext(ModeContext);
    const [mobileMode, setMobileMode] = useState(window.innerWidth <= 768);
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    const { projects } = language === "español" ? projectDataEspanol : projectsDataEnglish;

    useEffect(() => {
        const handleResize = () => {
            setMobileMode(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setIsEspanol(language === "español");
    }, [language]);

    useEffect(() => {
        if (mobileMode) {
            setShowAbout(true);
            setShowProjects(true);
            setShowSkills(true);
            setShowContact(true);
            setShowFooter(true);
            return;
        }

        const timer1 = setTimeout(() => setShowAbout(true), 1000);
        const timer2 = setTimeout(() => setShowProjects(true), 2000);
        const timer3 = setTimeout(() => setShowSkills(true), 2500);
        const timer4 = setTimeout(() => setShowContact(true), 3000);
        const timer5 = setTimeout(() => setShowFooter(true), 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        };
    }, [mobileMode]);

    const aboutHeading = isEspanol
        ? "Me importa entregar software fiable, util y bien resuelto."
        : "I care about shipping software that is reliable, useful, and well executed.";
    const projectsHeading = isEspanol
        ? "Trabajo orientado a sistemas publicados, no a ejercicios de tutorial."
        : "Work organized around shipped systems, not tutorial-scale exercises.";
    const skillsHeading = isEspanol
        ? "Habilidades agrupadas por practica, no por nube de keywords."
        : "Skills grouped by practice, not by keyword dumping.";
    const contactHeading = isEspanol
        ? "Abierto a conversaciones de producto, freelance e ingenieria."
        : "Open to product, freelance, and engineering conversations.";

    return (
        <div className={`row justify-content-${mobileMode ? "center" : "end"} ${className}`}>
            <div className="main-content row col-sm-10 col-md-7 justify-content-center scroll-column">
                <section className={`section col-md-10 ${focus === "about" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showAbout ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="about">
                    <span className="section-kicker">{isEspanol ? "Sobre mi" : "About"}</span>
                    <h2 className="section-heading">{aboutHeading}</h2>
                    <div className="section-copy">
                        <p>
                            {isEspanol
                                ? "Mas alla del codigo, mi verdadero valor reside en la etica profesional. Entiendo el desarrollo no solo como aprender tecnologias, sino como un compromiso de responsabilidad: cumplir plazos, apoyar al equipo y aportar el 100% sin que nadie tenga que pedirlo."
                                : "Beyond code, my true value lies in professional ethics. I see development not just as mastering tech, but as a commitment to responsibility: meeting deadlines, supporting the team, and giving 100% by default."}
                        </p>
                        <p>
                            {isEspanol
                                ? "Busco crecer en un entorno que valore la calidad humana, el criterio tecnico y la capacidad de ejecutar soluciones utiles de principio a fin."
                                : "I want to keep growing in environments that value human quality, technical judgment, and the ability to deliver useful solutions end to end."}
                        </p>
                    </div>
                    {isEspanol
                        ? <Link className="section-inline-link" href="https://drive.google.com/file/d/1cXay5tqPULuw5wr4k69LCv8oJpJovpCJ/view?usp=drive_link">Ver curriculum completo</Link>
                        : <Link className="section-inline-link" href="https://drive.google.com/file/d/1cXay5tqPULuw5wr4k69LCv8oJpJovpCJ/view?usp=drive_link">View full resume</Link>}
                </section>

                <section className={`section mt-5 d-flex flex-column col-md-10 ${focus === "projects" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showProjects ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="projects">
                    <span className="section-kicker">{isEspanol ? "Proyectos" : "Selected work"}</span>
                    <h2 className="section-heading">{projectsHeading}</h2>
                    <p className="section-copy">
                        {isEspanol
                            ? "Los proyectos destacados muestran arquitectura, experiencia de usuario y capacidad de entrega real. Los publicos extienden esa historia con demos accesibles y repositorios revisables."
                            : "The strongest projects show architecture, product thinking, and real delivery. Public projects extend that story with accessible demos and reviewable repositories."}
                    </p>
                    <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Cargando proyectos...</div>}>
                        <TechnicalCard projects={projects} />
                    </Suspense>
                </section>

                <section className={`section col-md-10 mt-5 ${focus === "skills" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showSkills ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="skills">
                    <span className="section-kicker">{isEspanol ? "Habilidades" : "Skills"}</span>
                    <h2 className="section-heading">{skillsHeading}</h2>
                    <p className="section-copy">
                        {isEspanol
                            ? "Organizo el stack por areas de trabajo para que se entienda mejor donde aporto valor."
                            : "I group the stack by type of work so it is clearer where I create value."}
                    </p>
                    <Suspense fallback={<div style={{ padding: '10px', textAlign: 'center' }}>Cargando habilidades...</div>}>
                        <div className="skills-group">
                            <h6>{isEspanol ? "Lenguajes de programacion" : "Programming languages"}</h6>
                            <IconsSkills skills="languages" />
                        </div>
                        <div className="skills-group">
                            <h6>{isEspanol ? "Librerias y frameworks" : "Libraries and frameworks"}</h6>
                            <IconsSkills skills="libraries" />
                        </div>
                        <div className="skills-group">
                            <h6>{isEspanol ? "Herramientas y plataformas" : "Tools and platforms"}</h6>
                            <IconsSkills skills="tools" />
                        </div>
                    </Suspense>
                </section>

                <section className={`section col-md-10 mt-5 mb-5 ${focus === "contact" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showContact ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="contact">
                    <span className="section-kicker">{isEspanol ? "Contacto" : "Contact"}</span>
                    <h2 className="section-heading">{contactHeading}</h2>
                    <p className="section-copy">
                        {isEspanol
                            ? "Puedes escribirme por correo o WhatsApp. Si tu proyecto necesita una web bien ejecutada, una mejora de frontend o una integracion full-stack, podemos hablar."
                            : "You can reach out by email or WhatsApp. If your project needs a well-executed website, a frontend upgrade, or a full-stack integration, we can talk."}
                    </p>
                    <div className="email d-flex flex-column contact-stack">
                        <Suspense fallback={<div style={{ padding: '10px', textAlign: 'center' }}>Cargando contactos...</div>}>
                            <EmailLink />
                            <WhatsappLink />
                        </Suspense>
                    </div>
                </section>

                <div style={{ height: '80px' }}></div>
                <footer className={`col-md-8 footer-note ${!mobileMode ? (showFooter ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`}>
                    {isEspanol
                        ? <span>
                            Redisenado sobre la base actual con Vite + React, manteniendo la estructura funcional y mejorando la jerarquia visual.
                        </span>
                        : <span>
                            Redesigned on top of the current Vite + React build, keeping the working structure and upgrading the visual hierarchy.
                        </span>}
                </footer>
            </div>
        </div>
    );
}

export default MainContent;
