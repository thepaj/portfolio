import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ratherImage from '../images/dashboard.png';
import flashcardImage from '../images/flashcards.png';
import bubbleImage from '../images/bubbles.png';
import todoImage from '../images/todo.png';
import myReadsImage from '../images/myreads.png'

class Projects extends React.Component {


    render() {
        return (
            <div>
                <h1>My projects</h1>
                <Row className='project-row'>
                    <Col xs={6} md={4}>
                        <div className="img-wrap">
                            <Image src={ratherImage} thumbnail className='project-image' />
                            <div className="img-description">
                                <p className="img-text">Would-you-rather game app made with React and Redux</p>
                                <a href="https://github.com/thepaj/would-you-rather-redux" target="_blank" rel="noopener noreferrer">
                                    <button className="img-button">View</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="img-wrap">
                            <Image src={flashcardImage} thumbnail className='project-image' />
                            <div className="img-description">
                                <p className="img-text">Flashcards Android app in React Native</p>
                                <a href="https://github.com/thepaj/udacity-flashcards" target="_blank" rel="noopener noreferrer">
                                    <button className="img-button">View</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="img-wrap">
                            <Image src={bubbleImage} thumbnail className='project-image' />
                            <div className="img-description">
                                <p className="img-text">Game using p5.js library and Firebase</p>
                                <a href="https://the-bubble-game-b87a4.appspot.com/?fbclid=IwAR20VzNmOMB_XKJr3eagvlz-vsI3-SgodX72qoXYdM79FwuznWCoBqf_Jxc" target="_blank" rel="noopener noreferrer">
                                    <button className="img-button">View</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <div className="img-wrap">
                            <Image src={todoImage} thumbnail className='project-image' />
                            <div className="img-description">
                                <p className="img-text">To-do list and goals app in React</p>
                                <a href="https://github.com/thepaj/to-do-app" target="_blank" rel="noopener noreferrer">
                                    <button className="img-button">View</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="img-wrap">
                            <Image src={myReadsImage} thumbnail className='project-image' />
                            <div className="img-description">
                                <p className="img-text">Book cataloging web app in React</p>
                                <a href="https://github.com/thepaj/udacity-myreads-project" target="_blank" rel="noopener noreferrer">
                                    <button className="img-button">View</button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Projects;