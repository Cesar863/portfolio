import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {
    const {name, repo, link, description } = project;

    return(
        <div className="col-lg-4 col-sm-6">
            <div className="portfolio-box" key={name}>
                <img
                    src={require(`../assets/img/${name}.png`)}
                    alt={removeHyphensAndCapitalize(name)}
                    className="img-fluid"
                />
                <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                        <a className="project-category text-faded" href={repo} target="_blank">
                        <i className="fab fa-github"></i>
                        </a>
                        <br />
                        <a className="project-category text-faded" href={link} target="_blank">{removeHyphensAndCapitalize(name)}</a>{' '}
                        <p className="project-name">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project;