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
                            src={Me} className="img-fluid mt-5"/>
                        </div>
                        <div>
                        <div>
                        <hr />
                        <h1 className='text-center'>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <br />
                        <h3 className="text-center"><u> Who am I? </u></h3>
                        <p className='text-left'> My name is Cesar Martinez. I currently teach middle school math from 7th grade math to Algebra 1 honors. I have a degree in Marketing from the University of South Florida. I am Tableu certified and have advanced knowledge in Full Stack Development. I was born in Mexico and i am a first generation Mexican American. I am 27 years old and have many skills and jobs. All which can be found and displayed by downloading my Resume under the "Resume" link at the top of this webpage.</p>
                        <h3 className="text-center"><u> What I am looking for.</u></h3>
                        <p className='text-left'>After I finish this boot camp I am looking for a change in careers. I would like to find work as a back end developer. I will continue to learn and work to become a successful and marketable full stack developer.</p>
                        <h3 className="text-center"><u>Why?</u></h3>
                        <p className='text-left'>While I love education, It is time for a change in careers. I love technology and I have always had a curiosity for code and web development. I would love to one day be on a team of developers that create life changing technology for the betterment of humanity</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;