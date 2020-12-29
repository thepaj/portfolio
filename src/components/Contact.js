import React from 'react';
import Clipboard from 'clipboard';

import Github from '../images/icons/github.png';
import LinkedIn from '../images/icons/linkedin.png';
import Email from '../images/icons/email.png';

// copy email to clipboard
const clip = new Clipboard(".email-icon-box");

clip.on("success", function() {
    alert("The email address has been copied to your clipboard :)");
});
clip.on("error", function() {
    alert("That didn't work, sorry :(")
});

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-page">
                <div className="contact-title-container">
                    <div className='page-title'>
                        Contact me
                    </div>
                </div>
                <div className='contacts-container'>
                    <div className='icons-container'>
                        <div data-clipboard-text="pavla.jureckova@gypri.cz" className='email-icon-box'>
                            <img src={Email} alt='email' className='icon'/>
                            <div className='icon-name'>Send me an email</div>
                        </div>
                        <a href="https://github.com/thepaj" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt='github' className='icon'/>
                            <div className='icon-name'>Visit my Github</div>
                        </a>
                        <a href="https://www.linkedin.com/in/pavla-jureckova/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt='linkedin' className='icon'/>
                            <div className='icon-name'>Fin me onLinkedIn</div>
                        </a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact;