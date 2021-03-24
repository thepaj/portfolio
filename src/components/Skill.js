import React from 'react';

class Skill extends React.Component {
    render() {
        return(
            <div className="skill-container">
                <p>{this.props.skill}</p>
            </div>
        )
    }
}

export default Skill;