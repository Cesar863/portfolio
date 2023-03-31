import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import certificate from '../assets/resume/Cesar Martinez Resume 2022-2023.pdf'

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
                            <li><img src={certificate} alt="UCF Certificate of completion">UCF Web Development Boot Camp</img></li>
                            <li>Microsoft Office Specialist: Microsoft Office 2016</li>
                        </ul>
                        <h4><u>Summary</u></h4>
                        <p> I am a marketing graduate and consultative sales professional
                        credited with hands - on experience driving sales enhancement and
                        achieving sustained revenue increases by using strong business
                        acumen, leadership, and decision - making skills in strategic sales
                        and marketing.I possess a strong ability to evaluate the market and
                        competitive conditions, current and emerging trends, and industry specific solutions to ensure an optimal position in the marketplace.
                        Continue to hone expertise in analyzing trends and forecasting sales
                        to formulate long - term strategies, key objectives, and operations
                        execution plans based on business best practices that helped in
                        achieving maximum growth and profitability.
                        My expertise lies in successfully developing and implementing
                        effective sales strategies, directing large - scale marketing campaigns,
                        and managing personal, trusting client relationships to maximize
                        company profits.I have achieved distinction as a top sales performer
                        and entrepreneur, consistently receiving recognition
                        for recordsetting sales figures, territory expansion, outperformed quotas, and
                        corporate goals achievement. </p>

                        <h4><u>Specialties</u></h4>
                        <p> Knowledge of traditional, contemporary, and emerging sales and
                        marketing techniques such as social media strategies, promotions,
                        and marketing campaigns that increase brand visibility and improve
                        sales.
                        Advanced problem - solving proficiency.Able to swiftly amend errors
                        and discrepancies and respond to inquiries to ensure uninterrupted
                        workflow and compliance with deadlines.
                        Strong critical thinking and thorough research, data analysis,
                        reconciliation, and numerical abilities.Keen accuracy
                        for detail in
                            evaluating financial data and interpreting complex information.
                        Well - developed interpersonal and communication skills.
                        Collaborative team player with an upbeat and positive attitude.
                        Proficient in Tableau, MS Word, MS Excel, MS Outlook, MS
                        PowerPoint, One Note, Adobe Creative Cloud(Photoshop, InDesign,
                            and Dreamweaver), MS Windows, MS Office </p>
                        <h4><u>Experience</u></h4>
                        <div className="container">
                        <div className="d-flex flex-fow justify-content-around">
                            <div className="p-2">
                                <h5>Polk County School Board</h5>
                                <br/>
                                <p>Math Teacher</p>
                                <p>August 2020 - Present</p>
                            </div> 
                            <div className="p-2">
                                <h5>Best Buy</h5>
                                <br/>
                                <p>Wireless Sales Consultant</p>
                                <p>October 2014 - August 2020</p>
                            </div> 
                            <div className="p-2">
                                <h5>AllSaints</h5>
                                <br />
                                <p>Stock Supervisor</p>
                                <p>August 2013 - April 2014</p>
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
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Resume;
