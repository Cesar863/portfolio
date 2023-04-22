import React from 'react';
import Content from '../components/Content';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

function Home({ currentPage }) {

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