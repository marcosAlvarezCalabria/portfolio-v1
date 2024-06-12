import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import projectsDataEnglish from "../../assets/data/englishProjects.json";
import projectDataespañol from "../../assets/data/españolProjects.json";
import "./expandable-car.css"
import ModeContext from '../../contexts/mode.context';
import LanguageContext from '../../contexts/language.context';
import VideoPlayer from '../react-player/video-player';


export default function ExpandableCard() {
    const [isCardExpanded, setIsCardExpanded] = useState(false);
    const [expandedProjectId, setExpandedProjectId] = useState(null);
   
    const { mode } = useContext(ModeContext)
    const { language } = useContext(LanguageContext)
    const { projects } = language === "español" ? projectDataespañol : projectsDataEnglish;
   

    const handleProjectShow = (projectId) => {
        setIsCardExpanded(expandedProjectId !== projectId);
        setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
    };
   

   

    return (
        <div className="container ">
            <div className="row d-flex justify-content-center  ">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`MagicCard expandable col-12 expandable-${mode === "dark" ? "dark" : "light"}  ${expandedProjectId === index ? "col-md-10" : "col-md-10"} mb-3 mt-5`}
                        initial={{ scale: 1 }}
                        animate={{ scale: expandedProjectId === index ? 1.1 : 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{
                            position: 'relative',
                            background: expandedProjectId === index ? 'white' : 'white',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            marginBottom: expandedProjectId === index ? '40px' : "20px",
                            marginTop: expandedProjectId === index ? '40px' : "20px",
                            color: expandedProjectId === index ? "black" : "black",
                            transition: 'color 0.3s ease',
                        }}
                    >
                        <div className=''  onClick={()=>{handleProjectShow(index)}}
                            style={{
                                width: expandedProjectId === index ? "100%" : "100%",
                                gap: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                padding: "1rem ",
                            
                            }}
                        >
                            <div 
                                style={{
                                    position: "relative",
                                  
                                }}
                            >
                                <div className='d-flex justify-content-between align-items-center '>
                                    <h3
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "1.4em",
                                           
                                        }}
                                    >
                                        {project.name}
                                        <i 
                                            className={`fa fa-angle-${expandedProjectId === index ? "down" : "up"} fa-lg ml-2`} 
                                            onClick={() => handleProjectShow(index)} 
                                            aria-hidden="true"
                                            style={{
                                                cursor: "pointer",
                                                color: expandedProjectId === index ? "black" : "black",
                                                
                                            }}
                                        ></i>
                                    </h3>
                                    <div>
                                    
                                        <a href={`${project.git}`} target="_blank" rel="noopener noreferrer">
                                            <i
                                                style={{ color: "black",  marginRight: "10px" }}
                                                className="fa fa-github fa-lg"
                                                aria-hidden="true">
                                            </i>
                                        </a>
                                        <a href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                                            <i
                                                style={{ color: "black", }}
                                                className="fa fa-link fa-lg"
                                                aria-hidden="true">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='row ' style={{ overflowY: "auto", padding: "" }}>
                                {/* <img src={project.image} alt="" /> */}
                                <VideoPlayer  height="180px"  url={project.video} ></VideoPlayer>
                               
                                {expandedProjectId === index && (
                                    <section className='col-md-12' style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: 'px' }}>
                                    {project.resume.split('\n').map((paragraph, index) => (
                                        <p className='mt-3' key={index}>{paragraph}</p>
                                    ))}
                                </section>
                                )}
                                <div className='d-flex row align-items-center'>
                                    {expandedProjectId === index && project.technologies.map((tech, index) => (
                                        <div key={index} className='skills-div ms-2 mt-2 ' style={{ width: "auto" }}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
