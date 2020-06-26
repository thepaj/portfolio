import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProfilePicture from '../images/paj.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <section className='hero'>
                    <Row>
                        <Col className='hero-col'>
                            <div className="hero-content">
                                <h1>Hello,</h1>
                                <h1>I am Pavla</h1>
                                <p>Passionate Front End Developer</p>
                            </div>
                            <div className="hero-buttons">
                                <Link to="/projects" className="main-btn">See projects</Link>
                                <a href="https://github.com/thepaj/resume/blob/master/resume_jureckova.pdf" target="_blank" rel="noopener noreferrer">
                                    <button className="secondary-btn">Get CV</button>
                                </a>
                            </div>
                        </Col>
                        <Col className='hero-col'>
                            <Image src={ProfilePicture} roundedCircle />
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default Home;