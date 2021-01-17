import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <div className="main-title-container">
                    <div className='main-title'>
                        Hello, I'm Paja.
                    </div>
                    <div className='main-desc'>
                        A passionate front-end developer
                    </div>
                </div>
                <div className='btn-container'>
                    <a href="https://github.com/thepaj/resume/blob/master/resume_jureckova.pdf" target="_blank" rel="noopener noreferrer" className='btn'>Get my CV</a>
                    <Link to="/projects" className='btn'>My projects</Link>
                </div>
            </div>
        )
    }
}

export default Home;