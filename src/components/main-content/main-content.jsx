import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import useScrollTracking from "../../hooks/useScrollTracking";
import LanguageContext from "../../contexts/language.context";

import "./main-content.css";
import ModeContext from "../../contexts/mode.context";
import Link from '@mui/material/Link';

// Lazy loading de componentes pesados
const IconsSkills = lazy(() => import("../icons-skills/icons-skills"));
const WhatsappLink = lazy(() => import("../social-media/whastapp-link/whatsappLink"));
const EmailLink = lazy(() => import("../social-media/email-link/emailLink"));
const TechnicalCard = lazy(() => import("../technical-card/TechnicalCard"));
import projectsDataEnglish from "../../assets/data/englishProjects.json";
import projectDataespañol from "../../assets/data/españolProjects.json";


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
    const { projects } = language === "español" ? projectDataespañol : projectsDataEnglish;

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

    // Animaciones secuenciales solo para desktop
    useEffect(() => {
        if (!mobileMode) {
            // Iniciar las animaciones después de que termine el typewriter
            const timer1 = setTimeout(() => setShowAbout(true), 1000); // Primero "Sobre mí"
            const timer2 = setTimeout(() => setShowProjects(true), 2000); // Luego "Proyectos"
            const timer3 = setTimeout(() => setShowSkills(true), 2500); // Luego "Skills"
            const timer4 = setTimeout(() => setShowContact(true), 3000); // Luego "Contacto"
            const timer5 = setTimeout(() => setShowFooter(true), 3500); // Finalmente el footer

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(timer5);
            };
        } else {
            // En mobile, mostrar todo inmediatamente
            setShowAbout(true);
            setShowProjects(true);
            setShowSkills(true);
            setShowContact(true);
            setShowFooter(true);
        }
    }, [mobileMode]);

    return (
        <div className={`row justify-content-${mobileMode ? "center" : "end"} ${className}`}>
            <div className="main-content row col-sm-10 col-md-7 justify-content-center scroll-column">
                <section className={`section col-md-10 ${focus === "about" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showAbout ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="about">
                    <h2>{isEspanol ? "Sobre mí" : "About Me"}</h2>
                    <p>
                        {isEspanol
                            ? "Hola !!, Bienvenido a mi portfolio. Actualmente, me dedico a expandir mis conocimientos en tecnologías relacionadas con el desarrollo web, aunque estoy abierto a explorar cualquier tipo de tecnología. La perseverancia es mi principal virtud, y se refleja en mi trabajo, donde siempre me esfuerzo al máximo. Estoy entusiasmado por las oportunidades futuras y los proyectos desafiantes que me permitan seguir mejorando y ofreciendo soluciones innovadoras."
                            : "Hello!! Welcome to my portfolio. Currently, I am dedicated to expanding my knowledge in web development technologies, although I am open to exploring any type of technology. Perseverance is my main virtue, and it is reflected in my work, where I always strive to give my best. I am excited about future opportunities and challenging projects that allow me to continue improving and offering innovative solutions."}
                    </p>
                    {isEspanol
                        ? <Link href="https://docs.google.com/document/d/189uk4yqbYS8wLcureKVLpUVNW-_9vJEBTdOgl2GIbSU/edit?usp=drive_link">Curriculum Vitae</Link>
                        : <Link href="https://docs.google.com/document/d/189uk4yqbYS8wLcureKVLpUVNW-_9vJEBTdOgl2GIbSU/edit?usp=drive_link">View Full Resume</Link>}
                </section>

                <section className={`section mt-5 d-flex flex-column col-md-10 ${focus === "projects" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showProjects ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="projects">
                    <h2>{isEspanol ? "Proyectos" : "Projects"}</h2>
                    <p>
                        {isEspanol
                            ? "Desde que inicié mi trayectoria en el desarrollo web, primero de manera autodidacta y luego a través de varios bootcamps, no he dejado de trabajar en diversos proyectos. A continuación, te muestro algunos de los más destacados. Si tienes curiosidad por ver más, te invito a visitar mi perfil en GitHub."
                            : "Since I began my journey in web development, first self-taught and then through several bootcamps, I haven't stopped working on various projects. Below, I showcase some of the most notable ones. If you're curious to see more, I invite you to visit my GitHub profile."}
                    </p>
                    <Suspense fallback={<div style={{padding: '20px', textAlign: 'center'}}>Cargando proyectos...</div>}>
                        <TechnicalCard projects={projects} />
                    </Suspense>
                </section>

                <section className={`section col-md-10  mt-5 ${focus === "skills" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showSkills ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="skills">
                    <h2 className="mb-4">{isEspanol ? "Habilidades" : "Skills"}</h2>
                    <Suspense fallback={<div style={{padding: '10px', textAlign: 'center'}}>Cargando habilidades...</div>}>
                        <h6>{isEspanol ? "- Lenguajes de programación." : "Programming Languages"}</h6>
                        <IconsSkills skills="languages" />
                        <h6>{isEspanol ? "- Librerías y frameworks." : "- Libraries & Frameworks"}</h6>
                        <IconsSkills skills="libraries" />
                        <h6>{isEspanol ? "- Herramientas y plataformas." : "- Tools & Platforms"}</h6>
                        <IconsSkills skills="tools" />
                    </Suspense>
                </section>

                <section className={`section col-md-10 mt-5 mb-5 ${focus === "contact" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""} ${!mobileMode ? (showContact ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`} id="contact">
                    <h2>{isEspanol ? "Contacto" : "Contact"}</h2>
                    <p>
                        {isEspanol
                            ? "Puedes contactarme a través de mi correo electrónico o redes sociales. Estoy disponible para discutir nuevas oportunidades y colaborar en proyectos interesantes."
                            : "You can contact me via email or social media. I am available to discuss new opportunities and collaborate on interesting projects."}
                    </p>
                    <div className="email d-flex flex-column">
                        <Suspense fallback={<div style={{padding: '10px', textAlign: 'center'}}>Cargando contactos...</div>}>
                            <EmailLink />
                            <WhatsappLink />
                        </Suspense>
                    </div>
                </section>

                <footer className={`col-md-7 text-center mt-5 ${!mobileMode ? (showFooter ? 'animate-fade-in-up' : 'hidden-bottom') : ''}`}>
                    {isEspanol
                        ? <span>
                            Diseñado de manera libre en <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> y codificado en <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> por su servidor. Construido con Vite + React y <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> CSS. Todo el texto está en la tipografía Inter.
                          </span>
                        : <span>
                            Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> by yours truly. Built with Vite + React and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> CSS. All text is set in the Inter typeface.
                          </span>}
                </footer>
            </div>
        </div>
    );
}

export default MainContent;
