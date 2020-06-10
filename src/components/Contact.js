import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import githubIcon from '../images/icons/github.png';
import LinkedinIcon from '../images/icons/linkedin.png';
import EmailIcon from '../images/icons/mail.png';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact me</h1>
                <Row className='contact-row'>
                    <Col className="icon-col">
                        <a href="https://github.com/thepaj" target="_blank" rel="noopener noreferrer">
                            <Image src={githubIcon} className='icon' />
                        </a>
                    </Col>
                    <Col className="text-col">
                        <p className="contact-text">
                            Check out my Github
                        </p>
                    </Col>
                </Row>
                <Row className='contact-row'>
                    <Col className="icon-col">
                        <a href="https://www.linkedin.com/in/pavla-jureckova/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedinIcon} className='icon' />
                        </a>
                    </Col>
                    <Col className="text-col">
                        <p className="contact-text">
                            Find me on LinkedIn
                        </p>
                    </Col>
                </Row>
                <Row className='contact-row'>
                    <Col className="icon-col">
                        <Image src={EmailIcon} />
                    </Col>
                    <Col className="text-col">
                        <p className="contact-text email">pavla.jureckova@gypri.cz</p>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default Contact;