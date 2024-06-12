import "./icons-skills.css"
import js from "../../../public/images/js.png"
import html from "../../../public/images/html.png"
import css from "../../../public/images/css3.png"
import node from "../../../public/images/node.png"
import handlebars from "../../../public/images/handlebars.png"
import mongo from "../../../public/images/mongo.png"
import react from "../../../public/images/react.png"
import express from "../../../public/images/expressjs.png"
import dockers from "../../../public/images/dockers.png"
import git from "../../../public/images/git.png"
import gitHub from "../../../public/images/github.png"



function IconsSkills({skills}){


    const renderIcons=() => {
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
                    <img className="image" src={gitHub} alt="Github" />
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="container-fluid p-2 icons-skills">
            {renderIcons()}
        </div>
    );

    }  

   
export default IconsSkills;