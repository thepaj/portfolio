import React from 'react';
import Image from 'react-bootstrap/Image';

import githubIcon from '../images/icons/github.png';
import LinkedinIcon from '../images/icons/linkedin.png';
import EmailIcon from '../images/icons/mail.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact me</h1>
                <Row className='contact-row'>
                    <a href="https://github.com/thepaj" target="_blank" rel="noopener noreferrer">
                        <Col className="contact-col">
                            <button className="contact-button">
                                <Image src={githubIcon} className='icon' />
                                <p className="contact-text">
                                    Check out my Github
                                </p>
                            </button>
                        </Col>
                    </a>
                    <a href="https://www.linkedin.com/in/pavla-jureckova/" target="_blank" rel="noopener noreferrer">
                        <Col className="contact-col">
                            <div className="contact-button">
                                <Image src={LinkedinIcon} className='icon' />
                                <p className="contact-text">
                                    Find me on LinkedIn
                                </p>
                            </div>
                        </Col>
                    </a>
                    <Col className="contact-col-email">
                        <div className="contact-container">
                            <Image src={EmailIcon} className='icon' />
                            <p className="contact-text email">
                                pavla.jureckova@gypri.cz
                            </p>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default Contact;