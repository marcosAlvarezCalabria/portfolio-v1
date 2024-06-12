import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../contexts/language.context";
import ExpandableCard from "../expandable-card/expandable-card";
import "./main-content.css";
import IconsSkills from "../icons-skills/icons-skills";
import ModeContext from "../../contexts/mode.context";
import WhatsappLink from "../social-media/whastapp-link/whatsappLink";
import EmailLink from "../social-media/email-link/emailLink";
import Link from '@mui/material/Link';

function MainContent({ className }) {
    const { language } = useContext(LanguageContext);
    const [isEspanol, setIsEspanol] = useState(language === "español");
    const [focus, setFocus] = useState("");
    const { mode } = useContext(ModeContext);
    const [mobileMode, setMobileMode]= useState(false)
    const screenSize = window.innerWidth

  

   

    useEffect(() => {

         if (screenSize <= 768) {
            setMobileMode(true);
          } else {
            setMobileMode(false);
          }
      
          
        const changeFocus = () => {
            const scrollY = window.scrollY;
            if(mobileMode){
                if (scrollY >= 500 && scrollY < 750) {
                    setFocus("about");
                    
                } else if (scrollY >= 800 && scrollY < 1700) {
                    setFocus("projects");
                    
                } else if (scrollY >= 1650 && scrollY < 1900) {
                    setFocus("skills");
                   
                } else if (scrollY >= 1900 && scrollY < 2000) {
                    setFocus("contact");
                    
                }

            } else {
                if (scrollY >= 0 && scrollY < 250) {
                    setFocus("about");
                  
                } else if (scrollY >= 300 && scrollY < 1200) {
                    setFocus("projects");
                   
                } else if (scrollY >= 1300 && scrollY < 1600) {
                    setFocus("skills");
                  
                } else if (scrollY >= 1600 && scrollY < 2900) {
                    setFocus("contact");
                  
                }
            }
    
            
        };
        window.addEventListener("scroll", changeFocus);
        console.log(scrollY);
       
        return () => {
            window.removeEventListener("scroll", changeFocus);
        };
    }, [screenSize ,scrollY]);

    useEffect(() => {
        setIsEspanol(language === "español");
    }, [language]);


      

    return (
        <div className={` row justify-content-${mobileMode ? "center" : "end "} ${className}`}>
            <div className="main-content row col-sm-10 col-md-7  justify-content-center scroll-column">
                <section className={`section col-md-10 ${focus === "about" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="about">
                    <h2>{isEspanol ? "Sobre mí" : "About Me"}</h2>
                    <p>
                        {isEspanol
                            ? "Hola !!, Bienvenido a mi portfolio. Actualmente, me dedico a expandir mis conocimientos en tecnologías relacionadas con el desarrollo web, aunque estoy abierto a explorar cualquier tipo de tecnología. La perseverancia es mi principal virtud, y se refleja en mi trabajo, donde siempre me esfuerzo al máximo. Estoy entusiasmado por las oportunidades futuras y los proyectos desafiantes que me permitan seguir mejorando y ofreciendo soluciones innovadoras."


                            : "Hello!! Welcome to my portfolio. Currently, I am dedicated to expanding my knowledge in web development technologies, although I am open to exploring any type of technology. Perseverance is my main virtue, and it is reflected in my work, where I always strive to give my best. I am excited about future opportunities and challenging projects that allow me to continue improving and offering innovative solutions."}
                    </p>
                    {isEspanol
                            ?  <Link href="https://drive.google.com/file/d/1zNZEJnCsHNUw_zCD_f5VGvlSAA9oQq5c/view?usp=drive_link">Curriculum Vitae </Link>
                            : <a href="https://drive.google.com/file/d/1zNZEJnCsHNUw_zCD_f5VGvlSAA9oQq5c/view?usp=drive_link">View Full Resume</a>}
                   
                </section>
                <section className={`section mt-5 d-flex flex-column  col-md-10 ${focus === "projects" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="projects">
                    <h2>{isEspanol ? "Proyectos" : "Projects"}</h2>
                    <p>
                        {isEspanol
                            ? "Desde que inicié mi trayectoria en el desarrollo web, primero de manera autodidacta y luego a través de varios bootcamps, no he dejado de trabajar en diversos proyectos. A continuación, te muestro algunos de los más destacados. Si tienes curiosidad por ver más, te invito a visitar mi perfil en GitHub."
                            : "Since I began my journey in web development, first self-taught and then through several bootcamps, I haven't stopped working on various projects. Below, I showcase some of the most notable ones. If you're curious to see more, I invite you to visit my GitHub profile."}
                    </p>
                    <ExpandableCard />
                </section>
                <section className={`section col-md-10 mt-5 ${focus === "skills" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="skills">
                    <h2 className="mb-4">{isEspanol ? "Habilidades" : "Skills"}</h2>
                    <h6>
                        {isEspanol ? "- Lenguajes de programación." : "Programming Languages"}
                    </h6>
                    <IconsSkills skills="languages" />
                    <h6>
                        {isEspanol ? "- Librerías y frameworks." : "- Libraries & Frameworks"}
                    </h6>
                    <IconsSkills skills="libraries" />
                    <h6>
                        {isEspanol ? "- Herramientas y plataformas." : "- Tools & Platforms"}
                    </h6>
                    <IconsSkills skills="tools" />
                </section>
                <section className={`section col-md-10 mt-5 mb-5 ${focus === "contact" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="contact">
                    <h2>{isEspanol ? "Contacto" : "Contact"}</h2>
                    <p>
                        {isEspanol
                            ? "Puedes contactarme a través de mi correo electrónico o redes sociales. Estoy disponible para discutir nuevas oportunidades y colaborar en proyectos interesantes."
                            : "You can contact me via email or social media. I am available to discuss new opportunities and collaborate on interesting projects."}
                    </p>
                    <div className="email d-flex flex-column">
                        <EmailLink></EmailLink>
                        <WhatsappLink></WhatsappLink>
                    </div>
                   
                </section>
                <footer className="col-md-7 text-center mt-5">
                {isEspanol
        ? <span>
            Diseñado de manera libre en <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> y codificado en <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> por su servidor. Construido con Vite + React y <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> CSS. Todo el texto está en la tipografía Inter.
          </span>
        : <span>
            Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> by yours truly. Built with Vite + React and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> CSS. All text is set in the Inter typeface.
          </span>
      }

                </footer>
            </div>
        </div>
    );
}

export default MainContent;
