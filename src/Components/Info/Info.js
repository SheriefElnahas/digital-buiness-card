import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Info.css';


export default function Info(props) {
  return (
    <div className='Info'>
      <img className='Info-image' src={props.img} alt='Eren Yeager From Attack On Titan' />
      <div className='Info-content'>
        <h1 className='Info-heading'>{props.name}</h1>
        <p className='Info-job'>{props.titan}</p>

      </div>
      <div className="Info-buttons">
          <button className="btn-primary"><FontAwesomeIcon className="button-icon" icon={faEnvelope} /> Email</button>
          <button className="btn-secondary"><FontAwesomeIcon className="button-icon" icon={faLinkedin} /> LinkedIn</button>
      </div>
    </div>
  );
}
