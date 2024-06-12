import React, { useContext } from 'react';
import projectsDataEnglish from '../../assets/data/englishProjects.json';
import projectsDataespañol from '../../assets/data/españolProjects.json';
import LanguageContext from '../../contexts/language.context';
import './projects-card.css';

function ProjectsCard({ className }) {
    const { language } = useContext(LanguageContext);
    const projects = language === 'español' ? projectsDataespañol.projects : projectsDataEnglish.projects;

    return (
        <div className="row ">
            {projects.map((project, index) => (
                <div className={`card project-card mb-3 col-12 col-md-10 ${className}`} key={index}>
                    <img src={project?.image} className="card-img-top" alt="Project" />
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.resume}</p>
                      
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectsCard;
