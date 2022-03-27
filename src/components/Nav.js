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
        <nav>
            <div>
                <h1>Cesar Martinez</h1>
                <div>
                    <ul>
                        {pages.map((Page) => (
                            <li
                                className={` ${
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