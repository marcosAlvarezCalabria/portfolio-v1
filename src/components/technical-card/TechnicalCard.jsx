import React, { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ModeContext from '../../contexts/mode.context';
import LanguageContext from '../../contexts/language.context';
import VideoPlayer from '../react-player/video-player';
import './TechnicalCard.css';

const TechnicalCard = ({ projects }) => {
    const [expandedId, setExpandedId] = useState(0);
    const [textExpanded, setTextExpanded] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const { mode } = useContext(ModeContext);
    const { language } = useContext(LanguageContext);
    const cardRefs = React.useRef([]);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        if (expandedId === null || !cardRefs.current[expandedId]) {
            return;
        }

        setTimeout(() => {
            cardRefs.current[expandedId].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 220);
    }, [expandedId]);

    const toggleExpand = (index) => {
        setExpandedId(expandedId === index ? null : index);
    };

    const toggleTextExpand = (index) => {
        setTextExpanded((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const truncateText = (text, maxLength = 170) => {
        if (!text || text.length <= maxLength) {
            return text;
        }

        return `${text.substring(0, maxLength)}...`;
    };

    const labels = language === 'español'
        ? {
            problem: 'Resumen',
            stack: 'Stack',
            links: 'Accesos',
            details: 'Abrir detalle',
            close: 'Cerrar detalle',
            readMore: 'Leer mas',
            showLess: 'Ver menos',
            featured: ['Destacado', 'Arquitectura', 'Publico']
        }
        : {
            problem: 'Summary',
            stack: 'Stack',
            links: 'Links',
            details: 'Open details',
            close: 'Close details',
            readMore: 'Read more',
            showLess: 'Show less',
            featured: ['Featured', 'Architecture', 'Public']
        };

    return (
        <div className="technical-cards-container">
            {projects.map((project, index) => (
                <motion.article
                    key={project.name}
                    ref={(element) => {
                        cardRefs.current[index] = element;
                    }}
                    className={`tech-card ${expandedId === index ? 'tech-card-open' : ''} ${mode === 'dark' ? 'tech-card-dark' : 'tech-card-light'}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                >
                    <button type="button" className="tech-card-header" onClick={() => toggleExpand(index)}>
                        <div className="project-title-stack">
                            <span className="project-kicker">{labels.featured[Math.min(index, labels.featured.length - 1)]}</span>
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-summary">
                                {isMobile && project.resume.length > 170 && !textExpanded[index]
                                    ? truncateText(project.resume)
                                    : project.resume}
                            </p>
                        </div>
                        <div className="project-head-meta">
                            <span className="project-tag">{project.technologies.slice(0, 2).join(' · ')}</span>
                            <span className="expand-icon">{expandedId === index ? labels.close : labels.details}</span>
                        </div>
                    </button>

                    {isMobile && project.resume.length > 170 && (
                        <button className="btn-expand-description" onClick={() => toggleTextExpand(index)}>
                            {textExpanded[index] ? labels.showLess : labels.readMore}
                        </button>
                    )}

                    <AnimatePresence initial={false}>
                        {expandedId === index && (
                            <motion.div
                                className="tech-card-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28 }}
                            >
                                <div className="video-section">
                                    <VideoPlayer url={project.video} height={window.innerWidth <= 1024 ? '180px' : '240px'} />
                                </div>

                                <div className="content-section">
                                    <div className="detail-block">
                                        <span className="comment">{labels.stack}</span>
                                        <div className="tech-tags">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-links">
                                        <span className="comment">{labels.links}</span>
                                        <div className="links">
                                            {project.git && (
                                                <a href={project.git} target="_blank" rel="noopener noreferrer" className="link-button">
                                                    GitHub
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-button link-button-secondary">
                                                    Live demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.article>
            ))}
        </div>
    );
};

export default TechnicalCard;
