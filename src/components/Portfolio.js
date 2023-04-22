import React, { useState } from 'react';
import Project from './Project';
import { capitalizeFirstLetter } from '../utils/helpers';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAll } from '../utils/reducers';
import { projectJSON } from '../utils/projectJSON';

function Portfolio() {
    const [pages] = useState([
        {
            name: 'portfolio'
        }
    ]);
    const showAll = useSelector((state) => state.storedInfo.showAll);
    const dispatch = useDispatch();
    console.log(showAll);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState(projectJSON);

    return(
        <section className="p-1 h2 mint-cream">
            {showAll ?
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
            :
            <Carousel showArrows={true}>
            {projects.map((project, idx) => (
                <Project
                    project={project}
                    key={"project" + idx}
                />
            ))}
        </Carousel>
        }
        <div style={{
            display: 'flex',
            justifyContent:'center',
        }}>
        {!showAll ?
        <Button onClick={() => {dispatch(setShowAll(true))}}>Show All Projects</Button>
        :
        <Button onClick={() => {dispatch(setShowAll(false))}}>Show Slides</Button>
        }
        </div>
        </section>
    )
};

export default Portfolio;