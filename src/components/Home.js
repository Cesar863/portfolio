import React from 'react';
import Content from './Content';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

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