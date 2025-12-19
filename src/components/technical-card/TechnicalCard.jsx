import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModeContext from '../../contexts/mode.context';
import LanguageContext from '../../contexts/language.context';
import VideoPlayer from '../react-player/video-player';
import './TechnicalCard.css';

const TechnicalCard = ({ projects }) => {
    const [expandedId, setExpandedId] = useState(null);
    const [textExpanded, setTextExpanded] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const { mode } = useContext(ModeContext);
    const { language } = useContext(LanguageContext);
    const cardRefs = React.useRef([]);

    // Scroll al centro cuando se expande una tarjeta
    React.useEffect(() => {
        if (expandedId !== null && cardRefs.current[expandedId]) {
            // Pequeño delay para permitir que la animación de framer-motion inicie
            setTimeout(() => {
                cardRefs.current[expandedId].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 300);
        }
    }, [expandedId]);

    const toggleExpand = (index) => {
        setExpandedId(expandedId === index ? null : index);
    };

    const toggleTextExpand = (index) => {
        setTextExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const truncateText = (text, maxLength = 120) => {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="technical-cards-container">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    ref={el => cardRefs.current[index] = el}
                    className={`tech-card ${mode === 'dark' ? 'tech-card-dark' : 'tech-card-light'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Header de la card */}
                    <div className="tech-card-header" onClick={() => toggleExpand(index)}>
                        <div className="terminal-dots">
                            <span className="dot red">×</span>
                            <span className="dot yellow">−</span>
                            <span className="dot green">+</span>
                        </div>
                        <div className="project-title">
                            <span className="prompt">~/projects/$</span> {project.name}
                        </div>
                        <div className="expand-icon">
                            {expandedId === index ? '▼' : '▶'}
                        </div>
                    </div>

                    {/* Contenido expandible */}
                    <AnimatePresence>
                        {expandedId === index && (
                            <motion.div
                                className="tech-card-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="video-section">
                                    <VideoPlayer url={project.video} height={window.innerWidth <= 1024 ? "120px" : "200px"} />
                                </div>

                                <div className="content-section">
                                    <div className="code-block">
                                        <span className="comment">// Project description</span>
                                        <p>
                                            {isMobile && project.resume.length > 120 && !textExpanded[index]
                                                ? truncateText(project.resume)
                                                : project.resume}
                                        </p>
                                        {isMobile && project.resume.length > 120 && (
                                            <button
                                                className="btn-expand-description"
                                                onClick={() => toggleTextExpand(index)}
                                            >
                                                {textExpanded[index]
                                                    ? (language === 'español' ? 'Ver menos' : 'Show less')
                                                    : (language === 'español' ? 'Leer más' : 'Read more')
                                                }
                                            </button>
                                        )}
                                    </div>

                                    <div className="project-links">
                                        <span className="comment">// Quick access</span>
                                        <div className="links">
                                            <a href={project.git} target="_blank" rel="noopener noreferrer" className="link-button">
                                                <span className="icon">📁</span> GitHub
                                            </a>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-button">
                                                <span className="icon">🚀</span> Live Demo
                                            </a>
                                        </div>
                                    </div>

                                    <div className="tech-stack">
                                        <span className="comment">// Technologies used</span>
                                        <div className="tech-tags">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default TechnicalCard;