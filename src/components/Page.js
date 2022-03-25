import React from 'react';

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
            return <About />;
        }
    };

    return (
        <section>
            
        </section>
    )
}

export default Page;