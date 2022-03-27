import React from 'react';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {
    const {name, repo, link, description } = project;

    return(
        <div>
            <div key={name}>
                <img
                    src={require(`../../public/assets/img/${name}.png`)}
                    alt={removeHyphensAndCapitalize(name)}
                />
                <div>
                    <div>
                        <a href={repo} target="_blank"></a>
                        <a href={link} target="_blank">{removeHyphensAndCapitalize(name)}</a>{' '}
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project;