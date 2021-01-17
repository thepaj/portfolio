import React from 'react';
import Chart from './Chart';
import Avatar from '../images/paj.jpg';

class About extends React.Component{
    render() {
        return(
            <div className='about-page'>
                <div className='about-title'>
                    A little bit about me
                </div>
                <div className="about-container">
                    <div className="about-column-container">
                        <div className='about-column-content'>
                            <div className='avatar-container'>
                                <img src={Avatar} alt="avatar" className="avatar"/>
                            </div>
                            <div>
                                <p className='about-text'>
                                    Hi, I am Paja and I'm a front-end developer based in Berlin. I first became interested in software engeneering at university where I was studying japanology and linguistics. 
                                    Since them I have attented numerous courses and build my own projects. So far I mostly worked with ReactJS but I am also interested in React Native and NodeJS. 

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column-container">
                        <div className='about-column-content'>
                            <div className='secondaty-title'>My skills</div>
                            <div className="chart-container">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;