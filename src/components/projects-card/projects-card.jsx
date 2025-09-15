import React, { useContext, useState, useEffect } from 'react';
import projectsDataEnglish from '../../assets/data/englishProjects.json';
import projectsDataespañol from '../../assets/data/españolProjects.json';
import LanguageContext from '../../contexts/language.context';
import './projects-card.css';

function ProjectsCard({ className }) {
    const { language } = useContext(LanguageContext);
    const projects = language === 'español' ? projectsDataespañol.projects : projectsDataEnglish.projects;
    const [expandedProjects, setExpandedProjects] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    console.log("Projects data:", projects);
    console.log("Is mobile:", isMobile);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpanded = (index) => {
        setExpandedProjects(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const truncateText = (text, maxLength = 150) => {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="card row ">
            {projects.map((project, index) => {
                const isExpanded = expandedProjects[index] || false;
                const shouldTruncate = isMobile && project.resume && project.resume.length > 150;
                
                return (
                    <div className={`card project-card mb-3 col-12 col-md-10 ${className}`} key={index}>
                        <img src={project?.image} className="card-img-top" alt="Project" />
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">
                                {shouldTruncate && !isExpanded 
                                    ? truncateText(project.resume) 
                                    : project.resume}
                            </p>
                            {shouldTruncate && (
                                <button 
                                    className="btn-expand-text"
                                    onClick={() => toggleExpanded(index)}
                                >
                                    {isExpanded 
                                        ? (language === 'español' ? 'Ver menos' : 'Show less')
                                        : (language === 'español' ? 'Ver más' : 'Read more')
                                    }
                                </button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsCard;
