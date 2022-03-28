import React from 'react';

function Foot() {
    const icons = [
        {
        name: 'fab fa-github',
        link: 'https://github.com/cesar863'
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/cesar-martinez-b623a8166/"
        }
    ]

    return(
        <section className="mx-5">
            <footer className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        {/* {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank"><i className={icon.name}></i></a>
                            )
                        )} */}
                        <p>dfbgnkerbgerjbgkerjbgrkb rgf er gferhjg rw</p>
                    </div>
                </div>
            </footer>
        </section>
    )
};

export default Foot;