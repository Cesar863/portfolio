import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

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
                        <h3 className="text-center">Cesar Martinez</h3>
                        <p className="text-center">Software Engineer | Full-Stack Web Developer</p>
                        <h4><u><u>Top Skills</u></u></h4>
                        <ul>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>AWS CDK</li>
                            <li>SQL</li>
                            <li>React.js</li>
                            <li>Express.js</li>
                        </ul>
                        <h4><u>Languages</u></h4>
                        <p>Spanish (Full Professional)</p>
                        <h4><u>Certifications</u></h4>
                        <ul>
                            <li><a href='http://cdn.cesarcmartinez.com/resume/CesarMartinezBootcamp.pdf' rel="noopener noreferrer" target="_blank"> UCF Web Development Boot Camp</a></li>
                            <li><a href='http://cdn.cesarcmartinez.com/resume/CesarMartinezTableau.pdf' rel="noopener noreferrer" target="_blank"> UCF Tableau Data Science Certification</a></li>
                        </ul>
                        <h4><u>Summary</u></h4>
                        <p> A Software Engineer with 2+ years of experience in Full-Stack development. 1+ years of AWS development. I am a quick leaner and am excited to grow in the field. I am currently working on Bravado Health where we are developing the AYVA app. </p>
                        <h4><u>Experience</u></h4>
                        <div className="container">
                        <div className="d-flex flex-fow justify-content-around">
                            <div className="p-2">
                            <div className="p-2">
                                <h5>Bravado Health</h5>
                                <br/>
                                <p>Software Engineer</p>
                                <p>February 2022 - Present</p>
                            </div> 
                                <h5>Polk County School Board</h5>
                                <br/>
                                <p>Math Teacher</p>
                                <p>August 2020 - February 2022</p>
                            </div> 
                        </div>
                        </div>
                        <h4><u> Education </u></h4> 
                        <div className="container">
                            <div className="d-flex flex-row justify-content-around">
                                <div className="p-2">
                                    <h5>University of South Florida</h5>
                                    <p>Bachelor of Science - BS, Marketing·(2020) </p>
                                </div>
                                <div className="p-2">
                                    <h5>Polk State College</h5>
                                    <p>Associate 's degree, Liberal Arts With A Background In Accounting·(2011 - 2013) </p>
                                </div>
                            </div>
                        </div>
                        <h4><u>Proficiencies</u></h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Git</li>
                            <li>React.js</li>
                            <li>Bootstrap</li>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>MERN Stack</li>
                            <li>NoSQL</li>
                            <li>PostgreSQL</li>
                            <li>TypeScript</li>
                            <li>Agile Development</li>
                            <li>GitHub</li>
                            <li>AWS CDK</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Amazon S3</li>
                            <li>REST API</li>
                            <li>Microservices</li>
                            <li>Material-UI</li>
                            <li>Back-End Web Development</li>
                            <li>Full-Stack Web Development</li>
                            <li>Web Development</li>
                            <li>Unit Testing</li>
                            <li>JSON</li>
                            <li>Git</li>
                            <li>Jest</li>
                            <li>AWS CloudFormation</li>
                            <li>AWS Lambda</li>
                            <li>Continuous Integration and Continuous Delivery (cd/ci)</li>
                            <li>Front-End Development</li>
                            <li>Version Control</li>
                            <li>GitFlow</li>
                            <li>Web Pack</li>
                            <li>Api Development</li>
                            <li>Amazon Web Services (AWS)</li>
                            <li>Redux.js</li>
                            <li>JSON Web Token (JWT)</li>
                            <li>XHTML</li>
                            <li>Object-Relational Mapping (ORM)</li>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>GraphQL</li>
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>Handlebars.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Resume;
