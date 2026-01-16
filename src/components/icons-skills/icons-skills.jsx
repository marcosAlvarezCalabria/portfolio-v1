import "./icons-skills.css"
import js from "/images/webp/js.webp"
import html from "/images/webp/html.webp"
import css from "/images/webp/css3.webp"
import node from "/images/webp/node.webp"
import handlebars from "/images/webp/handlebars.webp"
import mongo from "/images/webp/mongo.webp"
import react from "/images/webp/react.webp"
import express from "/images/webp/expressjs.webp"
import dockers from "/images/webp/dockers.webp"
import git from "/images/webp/git.webp"
import GitHubIcon from '@mui/icons-material/GitHub';



function IconsSkills({ skills }) {


    const renderIcons = () => {
        if (skills === 'languages') {
            return (
                <>
                    <img className="image" src={html} alt="HTML" />
                    <img className="image" src={css} alt="CSS" />
                    <img className="image" src={js} alt="JavaScript" />
                </>
            );
        } else if (skills === 'libraries') {
            return (
                <>
                    <img className="image" src={handlebars} alt="Handlebars" />
                    <img className="image" src={react} alt="React" />
                    <img className="image" src={node} alt="React" />
                </>
            );
        } else if (skills === 'tools') {
            return (
                <>
                    <img className="image" src={mongo} alt="MongoDB" />
                    <img className="image" src={express} alt="Express" />
                    <img className="image" src={dockers} alt="Dockers" />
                    <img className="image" src={git} alt="Git" />
                    <GitHubIcon className="image github-icon" style={{ fontSize: 60, color: '#333' }} />
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="container-fluid icons-skills">
            {renderIcons()}
        </div>
    );

}


export default IconsSkills;