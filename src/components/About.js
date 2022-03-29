import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import 'react-bootstrap';
import '../assets/css/style.css';
import Me from '../assets/img/Me.png';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';


function About() {
    const [pages] = useState([
        { name: 'about me'}
    ]);
    const [currentPage] = useState(pages[0]);

    return(
        <div className="masthead text-center d-flex p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto border bg-dark text-light row container-fluid">
                        <div className="col-6">
                            <img
                            src={Me} className="img-fluid mt-5"/>
                        </div>
                        <div className="col-6">
                        <div>
                        <hr />
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <h3> Who am I? </h3>
                        <p> My name is Cesar Martinez. I currently teach middle school math from 7th grade math to Algebra 1 honors. I have a degree in Marketing from the University of South Florida. I am Tableu certified and have advanced knowledge in Full Stack Development. I was born in Mexico and i am a first generation Mexican American. I am 27 years old and have many skills and jobs. All which can be found and displayed by downloading my Resume under the "Resume" link at the top of this webpage.</p>
                        <h3> What I am looking for.</h3>
                        <p>After I finish this boot camp I am looking for a change in careers. I would like to find work as a back end developer. I will continue to learn and work to become a successful an d marketable full stack developer.</p>
                        <h3>Why?</h3>
                        <p>While I love education, It is time for a change in careers. I love technology and I have always had a curiosity for code and web development. I would love to one day be on a team of developers that create life changing technology for the betterment of humanity</p>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                        <div className="p-2">
                                Email:
                                <br/>
                                <a href="mailto:cesarm.863@gmail.com" >
                                    <FaEnvelope size="3em"/> 
                                </a>
                            </div>
                            <div className="p-2">
                                GitHub: 
                                <br/> 
                                <a href="https://www.github.com/cesar863">
                                    <FaGithub size="3em"/>
                                </a>
                            </div>
                            <div className="p-2">
                                LinkedIn 
                                <br/> 
                                <a href="https://www.linkedin.com/in/cesar-martinez-b623a8166/">
                                    <FaLinkedin size="3em"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;