import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
            <div className="container">
                <h1 className="mint-cream">Cesar Martinez</h1>
                <div>
                    <ul className="navbar-nav ml-auto=">
                        {pages.map((Page) => (
                            <li
                                className={`nav-item nav-link ${
                                    currentPage.name === Page.name && 'active'
                                    }`}
                                key={Page.name}
                                >
                                    <span
                                        onClick={() => setCurrentPage(Page)}
                                    >
                                        {capitalizeFirstLetter(Page.name)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;