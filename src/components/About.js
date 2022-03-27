import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

function About() {
    const [pages] = useState([
        { name: 'about me'}
    ]);
    const [currentPage] = useState(pages[0]);

    return(
        <div>
            <div>
                <div>
                    <div>
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <p> lorem weornrg nwoen wrng orwng wojerng nrg nrgno 3rngowrong </p>
                        <p> ekjnf kiwbntkrjbngkerjbngkr ejbngkrejng kejrngk ern gkjerngk nr</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;