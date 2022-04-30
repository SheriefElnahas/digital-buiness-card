import React from 'react';
import './About.css';

export default function About(props) {
  return (
    <div className='About'>
      <h2>About</h2>
      <p>
       {props.content}
      </p>
    </div>
  );
}
