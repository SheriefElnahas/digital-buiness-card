import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="Footer">
            <div className='icons'>
            <span><FontAwesomeIcon className="button-icon" icon={faTwitter} /></span>
            <span><FontAwesomeIcon className="button-icon" icon={faFacebook} /></span>
            <span><FontAwesomeIcon className="button-icon" icon={faInstagram} /></span>
            <span><FontAwesomeIcon className="button-icon" icon={faGithub} /></span>
            </div>
  
        </div>
    )
}