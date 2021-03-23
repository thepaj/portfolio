import React from 'react';
import Project from './Project';

import bubbleImage from '../images/bubbles.png';
import wyrImage from '../images/wyr.png';
import portretImage from '../images/portret.jpg';

class Projects extends React.Component {
    render() {
        return (
            <div className='project-page'>
                <div className='page-title'>My projects</div>
                <div className='projects-container'>
                    <a href="https://laughing-almeida-8be599.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='The Bubble Game' projectDesc='Javascipt | P5.JS' image={bubbleImage}/>
                    </a>
                    <a href="https://5fe2521f48606e00074ef85d--peaceful-montalcini-2888dd.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='Would-You-Rather Game' projectDesc='React | Redux' image={wyrImage}/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.pavlajureckova.nejkrasnejsiportret" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='Soundboard App' projectDesc='React Native' image={portretImage}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Projects;