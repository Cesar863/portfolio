import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import Doc from '../assets/resume/Cesar_Martinez_Resume.pdf';

function Resume() {
    const [pages] = useState([
        { name: 'resume' }
    ]);

    const [currentPage] = useState(pages[0]);
    return(
        <section className="">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-10 mx-auto text-white mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="my-4" />
                        <h3>Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>MERN Stack</li>
                        </ul>
                        <p className="text-center">
                            <a className=" white-link" href={Doc} download>Download my Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Resume;
