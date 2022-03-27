import React from 'react';

function Footer() {
    const icons = [
        {
        name: 'github',
        link: 'https://github.com/cesar863'
        },
        {
            name: "linked-in",
            link: "https://www.linkedin.com/in/cesar-martinez-b623a8166/"
        }
    ]

    return(
        <section>
            <footer>
                <div>
                    <div>
                        {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </div>
                </div>
            </footer>
        </section>
    )
};

export default Footer;