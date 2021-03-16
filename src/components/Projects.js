import React from 'react';
import Project from './Project';

import flashcardImage from '../images/flashcards.png';
import bubbleImage from '../images/bubbles.png';
import todoImage from '../images/todo.png';
import myReadsImage from '../images/myreads.png';
import portfolioImage from '../images/portfolio.png';
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
                    <a href="https://gallant-hopper-64488a.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='My Reads' projectDesc='React' image={myReadsImage}/>
                    </a>
                    <a href="https://loving-shannon-2a1a2f.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='To-Do App' projectDesc='React' image={todoImage}/>
                    </a>
                    <a href="https://github.com/thepaj/udacity-flashcards" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='Flashcards' projectDesc='React Native | Redux' image={flashcardImage}/>
                    </a>
                    <a href="https://5fe2521f48606e00074ef85d--peaceful-montalcini-2888dd.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='Would-You-Rather Game' projectDesc='React | Redux' image={wyrImage}/>
                    </a>
                    <a href="https://awesome-heyrovsky-d116f9.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='Portfolio Website' projectDesc='CSS | React' image={portfolioImage}/>
                    </a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.pavlajureckova.nejkrasnejsiportret%26fbclid%3DIwAR0cPBB61uxhRszoY5buEccFhQWPx1wguRwE5vALRtJ0BBvCN9TfRkrgXFM&h=AT0c5wkKf_DYs-kyywPitJMeFjeZFWItlzYSkH4Jlgb-9IIJlDI-jyNi3TzolH8oGoPd-CYOq295Eb11QAa6THwJO-_ck4QznP32V9JgxElj20xcXOG4WedJ6n4" target="_blank" rel="noopener noreferrer">
                        <Project projectTitle='Soundboard App' projectDesc='React Native' image={portretImage}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Projects;