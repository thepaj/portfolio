import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cssClass: '',
          navbarClass: 'navbar',
          btn: 'nav-btn-container'
        }

        this.changeToggle = this.changeToggle.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    changeToggle() {
        if (this.state.cssClass === '') {
            this.setState({
                cssClass: 'change',
                navbarClass: 'navbar-toggle',
                btn: 'nav-btn-container-toggle'
            })
        } else {
            this.setState({
                cssClass: '',
                navbarClass: 'navbar',
                btn: 'nav-btn-container'
            })
        }
    }

    onLinkClick() {
        if(this.state.btn === 'nav-btn-container-toggle') {
            this.setState({
                cssClass: '',
                navbarClass: 'navbar',
                btn: 'nav-btn-container'
            })
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.navbarClass}>
                    <Link exact to='/' className='navbar-brand'>Pavla Jureckova</Link>

                    <Link exact to='/' className='nav-link' onClick={this.onLinkClick}>Home</Link>
                    <Link to='/about' className='nav-link' onClick={this.onLinkClick}>About</Link>
                    <Link to='/projects' className='nav-link' onClick={this.onLinkClick}>Projects</Link>
                    <Link to='/contact' className='nav-link' onClick={this.onLinkClick}>Contact</Link>
                </div>
                <div 
                    className={this.state.btn} 
                    onClick={this.changeToggle}>
                    <div className={this.state.cssClass}>
                        <div className="bar1"></div>
                    </div>
                    <div className={this.state.cssClass}>
                        <div className="bar2"></div>
                    </div>
                    <div className={this.state.cssClass}>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;