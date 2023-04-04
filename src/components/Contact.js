import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { validateEmail } from '../utils/helpers';
import axios from 'axios';
import '../assets/css/style.css';
import 'react-bootstrap';
import 'bootstrap';

function Contact() {
    const [pages] = useState([
        { name: 'Contact' }
    ]);

    const [currentPage] = useState(pages[0]);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };
    console.log(formState);

    const sendEmail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/submit-form', formState)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto mint-cream mb-4">
                        <h1 className="text-center">{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className="mint-cream my-4"/>
                        <form id="contact-form" onSubmit={handleSubmit} className="mb-5">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                            <label htmlFor="email">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    onBlur={handleChange}
                                />
                            </div>
                            <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows="5"
                                    defaultValue={message}
                                    onBlur={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p>{errorMessage}</p>
                                </div>
                            )}
                            <div className="text-center">
                            <button onClick={sendEmail} type="submit" className="btn btn-info btn-xl m-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;