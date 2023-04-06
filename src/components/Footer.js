import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaArrowAltCircleDown } from 'react-icons/fa';
import 'react-bootstrap';
import '../assets/css/style.css';
import Doc from '../assets/resume/CesarMartinezResume.pdf';

function Footer() {
    return(
        <div className="d-flex flex-row justify-content-around mint-cream">
            <div className="p-2">
                                Email:
                                <br/>
                                <a href="mailto:cesarm.863@gmail.com" >
                                    <FaEnvelope size="2.5em"/> 
                                </a>
                            </div>
                            <div className="p-2">
                                GitHub: 
                                <br/> 
                                <a href="https://www.github.com/cesar863">
                                    <FaGithub size="2.5em"/>
                                </a>
                            </div>
                            <div className="p-2">
                                LinkedIn 
                                <br/> 
                                <a href="https://www.linkedin.com/in/cesar-martinez-b623a8166/">
                                    <FaLinkedin size="2.5em"/>
                                </a>
                            </div>
                            <div className="p-2">
                                Resume:
                                <br/>
                                <a href={Doc} download>
                                    <FaArrowAltCircleDown size="2.5em"/>
                                </a>
                            </div>
        </div>
    )
};

export default Footer;