import React from 'react';

class Project extends React.Component {
    render() {
        return(
            <div className="img-wrap">
                <img src={this.props.image} alt="project" className='img'/>
                <div className='img-description'>
                    <div className='img-title'>{this.props.projectTitle}</div>
                    <hr className='line' />
                    <div className='img-desc'>{this.props.projectDesc}</div>
                </div>
            </div>
        )
    }
}

export default Project;

