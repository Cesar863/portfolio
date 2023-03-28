import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';
import { FaGithub } from 'react-icons/fa';

function Project({ project }) {
    const {name, repo, link, description } = project;

    return(
        <div className="col-lg-4 col-sm-6 p-1 border border-dark">
            <div className="portfolio-box" key={name}>
                <img
                    src={require(`../assets/img/${name}.png`)}
                    alt={removeHyphensAndCapitalize(name)}
                    className="img-fluid"
                />
                <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                        <a className="project-category text-faded" href={repo} target="_blank" rel="noopener noreferrer">
                        <FaGithub size="2.5em"/>
                        </a>
                        <br />
                        <a className="project-category text-faded" href={link} target="_blank" rel="noopener noreferrer">{removeHyphensAndCapitalize(name)}</a>{' '}
                        <p className="project-name">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project;