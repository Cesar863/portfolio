import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import 'react-bootstrap';
import '../assets/css/style.css';
import Me from '../assets/img/Me.png';


function About() {
    const [pages] = useState([
        { name: 'about me'}
    ]);
    const [currentPage] = useState(pages[0]);

    return(
        <div className=" d-flex p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto border gunmetal mint-cream d-flex flex-wrap row container-fluid">
                        <div>
                            <img
                            src={Me} className="img-fluid mt-5" alt="My fiance and I in front of the tower at Bok Tower Gardens."/>
                        </div>
                        <div>
                        <div>
                        <hr />
                        <h1 className='text-center'>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <br />
                        <h3 className="text-center"><u> Who am I? </u></h3>
                        <p className='text-left'> My name is Cesar Martinez. Im from Lakeland Florida and I am working as a Full-Stack Software Engineer at Bravado Health. I was previously a Math Teacher but I took a leap of faith and ended up switching careers and it has been something I have never looked back on. I am eager to prove myself in the field. I am like a sponge when it comes to new information and what I lack in experience I make up for with loving the grind on learning new skills.</p>
                        <h3 className="text-center"><u> What I am looking for.</u></h3>
                        <p className='text-left'>I am looking for a role as either a software engineer or a full stack developer(or front-end/ back-end). I love to learn so I am willing to pick up any language necessary for the role. My experience is mostly in TypeScript, Node.js, React.js, SQL, PostgreSQL, AWS, and golang. </p>
                        <h3 className="text-center"><u>Want more info?</u></h3>
                        <p className='text-left'>You can download my resume at the bottom of this page by clicking on the "Resume" link. Checkout my GitHub by clicking on the "GitZHub" icon at the bottom of the page. You can also check out my LinkedIn profile by clicking on the "LinkedIn" icon at the bottom of the page.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;