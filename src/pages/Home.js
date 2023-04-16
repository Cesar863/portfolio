import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import { incrementViewCount } from '../utils/dynamodb';

function Home({ currentPage }) {
    const [hit, setHit] = useState(false);

    if(!hit){
        incrementViewCount();
        setHit(true);
    }

    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <section className="">
            <Content>{renderPage()}</Content>
        </section>
    );
}

export default Home;