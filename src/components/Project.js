import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';
import { FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Project({ project }) {
    const {name, repo, link, description } = project;
    const showAll = useSelector((state) => state.storedInfo.showAll);

    return(
        
        <div className={showAll ? "col-lg-4 col-sm-6 p-1 border border-dark" : 'p-1 border border-dark'}>
            {!showAll ? <div className="text-light h2">{removeHyphensAndCapitalize(name)}</div> : <></>}
            <div className="portfolio-box" key={name}>
                <img
                    src={`http://cdn.cesarcmartinez.com/img/${name}.png`}
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