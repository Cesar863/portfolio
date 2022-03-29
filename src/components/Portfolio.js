import React, { useState } from 'react';
import Project from './Project';
import { capitalizeFirstLetter } from '../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: 'portfolio'
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: "code-refactor",
            description: "A challenge to join CSS classes and refactor code to make it more efficient and beneficial to follow best practices. The challenge also includes fixing html components that are more descriptive and follow best practices.",
            link: "https://cesar863.github.io/code-refactor/",
            repo: "https://github.com/Cesar863/code-refactor"
        },
        {
            name: "HTML-CSS-portfolio",
            description: "A basic student portfolio created using  best practices for HTML and CSS",
            link: "https://cesar863.github.io/Student-Portfolio/",
            repo: "https://github.com/Cesar863/Student-Portfolio",
        },
        {
            name: "password-generator",
            description: "This password generator will ask a series of questions in order to help create secure passwords that will make your accounts more secure",
            link: "https://cesar863.github.io/password-generator/",
            repo: "https://github.com/Cesar863/password-generator"
        },
        {
            name: "javascript-quiz",
            description: "A simple web quiz that allows users to save scores to local storage. Incorrect answers will penalize the player by removing 10 seconds from the timer. Users final time is the score.",
            link: "https://cesar863.github.io/javascript-quiz/",
            repo: "https://github.com/Cesar863/javascript-quiz"
        },
        {
            name: "work-day-scheduler",
            description: "this is a calendar app that allows you to locally save to do tasks based on a daily schedule ran by businesses.",
            link: "https://cesar863.github.io/calendar-application/",
            repo: "https://github.com/Cesar863/calendar-application"
        },
        {
            name: "idk-you-pick",
            description: "Pick a random place to eat based on distance willing to travel within specified zipcode. Able to save favorites and narrow down searches based on types of cuisine.",
            link: "https://sarahwesley.github.io/idk-you-pick/",
            repo: "https://github.com/sarahwesley/idk-you-pick"
        },
        {
            name: "start-us",
            description: "a fullstack app for local freelance services and businesses.",
            link: "https://start-us-team-borderline.herokuapp.com/",
            repo: "https://github.com/cesar863/start-us"
        },
        {
            name: "tech-blog",
            description: "A tech blogging website that was created using MVC and handlebars.js. Accounts can be created and validated using the express-session npm package.",
            link: "https://cesar-tech-talk.herokuapp.com/",
            repo: "https://github.com/cesar863/tech-bog"
        },
        {
            name: "PWA-budget-tracker",
            description: "A progressive web application (PWA) that allows users to track their incomes and expenses. the app allows for users to track expenses offline and post them when they re-connect. The app shows an intuitive chart so users can track spending.",
            link: "https://budget-tracker-cesar-martinez.herokuapp.com/",
            repo: "https://github.com/Cesar863/budget-tracker"
        },
        {
            name: "eat-n-greet",
            description: "A MERN application created to connect people with similar food interests.",
            link: "Link-coming-soon",
            repo: "https://github.com/CTripleF/eat-n-greet"
        }
    ]);

    return(
        <section className="p-1 h2 mint-cream">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery m-2">
                    {projects.map((project, idx) => (
                        <Project
                            project={project}
                            key={"project" + idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Portfolio;