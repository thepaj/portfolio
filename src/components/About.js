import React from 'react';
import Skill from './Skill';
import Avatar from '../images/paj.jpg';

class About extends React.Component{
    render() {
        return(
            <div className='about-page'>
                <div className='about-title'>
                    A little bit about me
                </div>
                <div className="about-container">
                    <div className="skills-container">
                        <Skill skill="Javascript" />
                        <Skill skill="React" />
                        <Skill skill="Redux" />
                        <Skill skill="React Native" />
                        <Skill skill="Node.js" />
                        <Skill skill="SQL" />
                        <Skill skill="P5.js" />
                        <Skill skill="Git" />
                        <Skill skill="HTML" />
                        <Skill skill="CSS" />
                        <Skill skill="Firebase" />
                        <Skill skill="Git" />
                    </div>
                    <div className="about-content-container">
                        <div className='avatar-container'>
                                <img src={Avatar} alt="avatar" className="avatar"/>
                            </div>
                            <div className="about-text-container">
                                <p className='about-text'>
                                    Hi! 
                                </p>
                                <p className='about-text'>
                                    My name is Paja and I'm a front-end developer based in Berlin. I first became interested in software engeneering at university where I was studying japanology and linguistics. 
                                </p>
                                <p className='about-text'>
                                    Since then I have attented numerous courses and built my own projects. So far I mostly worked with ReactJS and Redux but I've also just launched my first Android application in React Native and I started diving more into the back-end with NodeJS. 
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;